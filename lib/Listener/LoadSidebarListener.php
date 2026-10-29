<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Listener;

use OCA\Files\Event\LoadSidebar;
use OCA\Files_DownloadLimit\AppInfo\Application;
use OCA\Files_DownloadLimit\Service\ConfigService;
use OCP\AppFramework\Services\IInitialState;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

/** @template-implements IEventListener<LoadSidebar> */
class LoadSidebarListener implements IEventListener {
	public function __construct(
		private IInitialState $initialState,
		private ConfigService $configService,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if (!($event instanceof LoadSidebar)) {
			return;
		}

		$this->initialState->provideInitialState(
			'default-download-limit',
			$this->configService->getDefaultLimit() ?? -1,
		);
		$this->initialState->provideInitialState(
			'enforce-download-limit',
			$this->configService->isLimitEnforced(),
		);

		Util::addStyle(Application::APP_ID, Application::APP_ID . '-main');
		Util::addInitScript(Application::APP_ID, Application::APP_ID . '-main');
	}
}
