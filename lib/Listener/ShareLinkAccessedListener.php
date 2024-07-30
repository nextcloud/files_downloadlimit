<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Files_DownloadLimit\Listener;

use OCA\Files_DownloadLimit\Db\Limit;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCA\Files_Sharing\Event\ShareLinkAccessedEvent;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IConfig;
use OCP\Share\IManager;
use Psr\Log\LoggerInterface;

class ShareLinkAccessedListener implements IEventListener {

	/** @var IConfig */
	private $config;

	/** @var IManager */
	private $manager;

	/** @var LimitMapper */
	private $mapper;

	public function __construct(IConfig $config,
								IManager $manager,
								LimitMapper $mapper) {
		$this->config = $config;
		$this->manager = $manager;
		$this->mapper = $mapper;
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
