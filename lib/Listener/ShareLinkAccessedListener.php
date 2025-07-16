<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Listener;

use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCA\Files_Sharing\Event\ShareLinkAccessedEvent;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IConfig;
use OCP\Share\IManager;
use Psr\Log\LoggerInterface;

/** @template-implements IEventListener<ShareLinkAccessedEvent> */
class ShareLinkAccessedListener implements IEventListener {
	public function __construct(
		private IConfig $config,
		private IManager $manager,
		private LimitMapper $mapper,
		private LoggerInterface $logger,
	) {
	}

	public function handle(Event $event): void {
		if (!($event instanceof ShareLinkAccessedEvent)) {
			return;
		}

		// Let's only handle the download events
		if ($event->getStep() !== 'download') {
			return;
		}

		$token = $event->getShare()->getToken();
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
				$this->manager->deleteShare($event->getShare());
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
