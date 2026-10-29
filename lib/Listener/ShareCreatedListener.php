<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Listener;

use OCA\Files_DownloadLimit\Service\LimitService;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Share\Events\ShareCreatedEvent;

/** @template-implements IEventListener<ShareCreatedEvent> */
class ShareCreatedListener implements IEventListener {
	public function __construct(
		private LimitService $limitService,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if (!($event instanceof ShareCreatedEvent)) {
			return;
		}

		$this->limitService->enforceLimit($event->getShare());
	}
}
