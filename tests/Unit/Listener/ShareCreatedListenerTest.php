<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\Listener;

use OCA\Files_DownloadLimit\Listener\ShareCreatedListener;
use OCA\Files_DownloadLimit\Service\LimitService;
use OCP\EventDispatcher\Event;
use OCP\Share\Events\ShareCreatedEvent;
use OCP\Share\IShare;
use PHPUnit\Framework\TestCase;

class ShareCreatedListenerTest extends TestCase {
	public function testHandle(): void {
		$share = $this->createStub(IShare::class);
		$limitService = $this->createMock(LimitService::class);
		$limitService->expects($this->once())->method('enforceLimit')->with($share);

		(new ShareCreatedListener($limitService))->handle(new ShareCreatedEvent($share));
	}

	public function testHandleOtherEvent(): void {
		$limitService = $this->createMock(LimitService::class);
		$limitService->expects($this->never())->method('enforceLimit');

		(new ShareCreatedListener($limitService))->handle(new Event());
	}
}
