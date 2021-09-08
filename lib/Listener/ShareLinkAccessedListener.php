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

namespace OCA\Files_DownloadCounter\Listener;

use OCA\Files_DownloadCounter\AppInfo\Application;
use OCA\Files_Sharing\Event\ShareLinkAccessedEvent;
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

	/** @var LoggerInterface */
	private $logger;

	public function __construct(IConfig $config,
								IManager $manager,
								LoggerInterface $logger) {
		$this->config = $config;
		$this->manager = $manager;
		$this->logger = $logger;
	}

	public function handle(Event $event): void {
		if (!($event instanceof ShareLinkAccessedEvent)) {
			return;
		}

		// Let's only handle the download events
		if ($event->getStep() !== 'download') {
			return;
		}

		// Make sure we have a valid limit
		$token = $event->getShare()->getToken();
		$limit = $this->config->getAppValue(Application::APP_ID, 'download_limit_' . $token, -1);

		if ($limit > 0) {
			$count = $this->config->getAppValue(Application::APP_ID, 'download_count_' . $token, 0) + 1;
			$this->config->setAppValue(Application::APP_ID, 'download_count_' . $token, $count);

			// If we reached the count download, we delete the share
			if ($count >= $limit) {
				$this->manager->deleteShare($event->getShare());
				$count = $this->config->deleteAppValue(Application::APP_ID, 'download_limit_' . $token);
				$count = $this->config->deleteAppValue(Application::APP_ID, 'download_count_' . $token);
			}
		}
	}
}
