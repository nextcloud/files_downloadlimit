<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Listener;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent;
use OCP\AppFramework\Services\IInitialState;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

/** @template-implements IEventListener<BeforeTemplateRenderedEvent> */
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

		Util::addStyle(Application::APP_ID, Application::APP_ID . '-public');
		Util::addInitScript(Application::APP_ID, Application::APP_ID . '-public');
	}
}
