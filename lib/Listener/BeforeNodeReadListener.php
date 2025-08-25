<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Listener;

use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Events\BeforeZipCreatedEvent;
use OCP\Files\Events\Node\BeforeNodeReadEvent;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\NotFoundException;
use OCP\Files\Storage\ISharedStorage;
use OCP\ICache;
use OCP\ICacheFactory;
use OCP\IRequest;
use OCP\ISession;
use OCP\Share\IManager;
use OCP\Share\IShare;
use Psr\Log\LoggerInterface;

/**
 * @template-implements IEventListener<BeforeNodeReadEvent|BeforeZipCreatedEvent|Event>
 */
class BeforeNodeReadListener implements IEventListener {
	private ICache $cache;
	public function __construct(
		private IManager $manager,
		private LimitMapper $mapper,
		private LoggerInterface $logger,
		private IRequest $request,
		private ISession $session,
		ICacheFactory $cacheFactory,
	) {
		$this->cache = $cacheFactory->createDistributed('files_downloadlimit_event');
	}

	public function handle(Event $event): void {
		if ($event instanceof BeforeZipCreatedEvent) {
			$this->handleBeforeZipCreatedEvent($event);
		} elseif ($event instanceof BeforeNodeReadEvent) {
			$this->handleBeforeNodeReadEvent($event);
		}
	}

	public function handleBeforeZipCreatedEvent(BeforeZipCreatedEvent $event): void {
		$files = $event->getFiles();
		if (count($files) !== 0) {
			/* No need to do anything, count will be triggered for each file in the zip by the BeforeNodeReadEvent */
			return;
		}

		$node = $event->getFolder();
		if (!($node instanceof Folder)) {
			return;
		}

		try {
			$storage = $node->getStorage();
		} catch (NotFoundException) {
			return;
		}

		if (!$storage->instanceOfStorage(ISharedStorage::class)) {
			return;
		}

		/** @var ISharedStorage $storage */
		$share = $storage->getShare();

		if (!in_array($share->getShareType(), [IShare::TYPE_EMAIL, IShare::TYPE_LINK])) {
			return;
		}

		/* Cache that that folder download activity was published */
		$this->cache->set($this->request->getId(), $node->getPath(), 3600);

		$this->singleFileDownloaded($share);
	}

	public function handleBeforeNodeReadEvent(BeforeNodeReadEvent $event): void {
		$node = $event->getNode();
		if (!($node instanceof File)) {
			return;
		}

		try {
			$storage = $node->getStorage();
		} catch (NotFoundException) {
			return;
		}

		if (!$storage->instanceOfStorage(ISharedStorage::class)) {
			return;
		}

		/** @var ISharedStorage $storage */
		$share = $storage->getShare();

		if (!in_array($share->getShareType(), [IShare::TYPE_EMAIL, IShare::TYPE_LINK])) {
			return;
		}

		$path = $this->cache->get($this->request->getId());
		if (is_string($path) && str_starts_with($node->getPath(), $path)) {
			/* An activity was published for a containing folder already */
			return;
		}

		/* Avoid publishing several activities for one video playing */
		$cacheKey = $node->getId() . $node->getPath() . $this->session->getId();
		if (($this->request->getHeader('range') !== '') && ($this->cache->get($cacheKey) === 'true')) {
			/* This is a range request and an activity for the same file was published in the same session */
			return;
		}
		$this->cache->set($cacheKey, 'true', 3600);


		$this->singleFileDownloaded($share);
	}

	protected function singleFileDownloaded(IShare $share): void {

		$token = $share->getToken();
		if ($token === null) {
			return;
		}
		// Make sure we have a valid limit
		try {
			$shareLimit = $this->mapper->get($token);
			$limit = $shareLimit->getLimit();

			// Increment this download event
			$downloads = $shareLimit->getDownloads() + 1;

			// If we reached the maximum allowed download count
			if ($downloads >= $limit) {
				// Delete share
				$this->manager->deleteShare($share);
				// Delete limit
				$this->mapper->delete($shareLimit);
				return;
			}

			// Else, we just update the current download count
			$shareLimit->setDownloads($downloads);
			$this->mapper->update($shareLimit);
		} catch (DoesNotExistException $e) {
			// No limit is set, ignore
		} catch (\Exception $e) {
			$this->logger->error('Error while handling share link accessed event: ' . $e->getMessage());
		}


	}

}
