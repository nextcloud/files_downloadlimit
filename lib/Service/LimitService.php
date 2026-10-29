<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Service;

use OCA\Files_DownloadLimit\AuditLog\AuditEventFactory;
use OCA\Files_DownloadLimit\AuditLog\Operation;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Share\IManager;
use OCP\Share\IShare;
use Psr\Log\LoggerInterface;

class LimitService {
	public function __construct(
		private IManager $manager,
		private LimitMapper $mapper,
		private IEventDispatcher $eventDispatcher,
		private LoggerInterface $logger,
	) {
	}

	/**
	 * Count a download of the share and delete the share once its download limit is reached
	 */
	public function countDownload(IShare $share): void {
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
				$this->eventDispatcher->dispatchTyped(AuditEventFactory::create(
					Operation::ShareLimitReached,
					'The share with ID "%s" by "%s" has been deleted because its download limit of %s was reached',
					[
						'shareId' => $share->getId(),
						'sharedBy' => $share->getSharedBy(),
						'limit' => $limit,
					],
				));
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
