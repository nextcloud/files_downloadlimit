<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
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
		Util::addInitScript(Application::APP_ID, Application::APP_ID . '-main');
	}
}
