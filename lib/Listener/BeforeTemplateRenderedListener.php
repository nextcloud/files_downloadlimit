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

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent;
use OCP\AppFramework\Services\IInitialState;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class BeforeTemplateRenderedListener implements IEventListener {

	public function __construct(
		private IInitialState $initialStateService,
		private LimitMapper $limitMapper,
	) {
	}

	public function handle(Event $event): void {
		if (!$event instanceof BeforeTemplateRenderedEvent) {
			return;
		}

		try {
			$shareLimit = $this->limitMapper->get($event->getShare()->getToken());
		} catch (\Throwable $e) {
			// No limits are set, ignoring...
			return;
		}

		$this->initialStateService->provideInitialState('download_limit', [
			'limit' => $shareLimit->getLimit(),
			'downloads' => $shareLimit->getDownloads(),
		]);

		Util::addScript(Application::APP_ID, Application::APP_ID . '-public');
	}
}
