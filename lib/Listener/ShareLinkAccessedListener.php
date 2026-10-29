<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Listener;

use OCA\Files_DownloadLimit\Service\LimitService;
use OCA\Files_Sharing\Event\ShareLinkAccessedEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;

/** @template-implements IEventListener<ShareLinkAccessedEvent> */
class ShareLinkAccessedListener implements IEventListener {
	public function __construct(
		private LimitService $limitService,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if (!($event instanceof ShareLinkAccessedEvent)) {
			return;
		}

		// Let's only handle the download events
		if ($event->getStep() !== 'download') {
			return;
		}

		$this->limitService->countDownload($event->getShare());
	}
}
