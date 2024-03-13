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

use OCA\Files\Event\LoadSidebar;
use OCA\Files_DownloadLimit\AppInfo\Application;
use OCP\AppFramework\Services\IInitialState;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\IAppConfig;
use OCP\Util;

/** @template-implements IEventListener<LoadSidebar> */
class LoadSidebarListener implements IEventListener {
	public function __construct(
		private IInitialState $initialState,
		private IAppConfig $appConfig,
	) {
	}

	public function handle(Event $event): void {
		if (!($event instanceof LoadSidebar)) {
			return;
		}

		$this->initialState->provideInitialState(
			'default-download-limit',
			$this->appConfig->getValueInt(Application::APP_ID, 'default-download-limit', -1),
		);

		Util::addStyle(Application::APP_ID, Application::APP_ID . '-main');
		Util::addScript(Application::APP_ID, Application::APP_ID . '-main');
	}
}
