<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\Controller;

use OCA\Files_DownloadLimit\Controller\AdminController;
use OCA\Files_DownloadLimit\Tests\Unit\AuditLog\AuditLogHelper;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IAppConfig;
use OCP\IRequest;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class AdminControllerTest extends TestCase {
	private IAppConfig&MockObject $appConfig;
	private AdminController $controller;

	/** @var list<Event> */
	private array $dispatched = [];

	protected function setUp(): void {
		parent::setUp();

		$this->appConfig = $this->createMock(IAppConfig::class);
		$eventDispatcher = $this->createStub(IEventDispatcher::class);
		$eventDispatcher->method('dispatchTyped')
			->willReturnCallback(function (Event $event): void {
				$this->dispatched[] = $event;
			});

		$this->controller = new AdminController(
			$this->createStub(IRequest::class),
			$this->appConfig,
			$eventDispatcher,
		);
	}

	private function mockStoredLimit(?int $limit): void {
		$this->appConfig->method('hasKey')
			->with('files_downloadlimit', 'default-download-limit')
			->willReturn($limit !== null);
		$this->appConfig->method('getValueInt')
			->with('files_downloadlimit', 'default-download-limit')
			->willReturn($limit ?? 0);
	}

	private function assertSingleAuditEvent(string $operation, string $message, array $parameters): void {
		$this->assertCount(1, $this->dispatched);
		$event = $this->dispatched[0];
		$this->assertInstanceOf(CriticalActionPerformedEvent::class, $event);
		$this->assertSame($message, $event->getLogMessage());
		$this->assertSame($parameters, $event->getParameters());
		$this->assertTrue(AuditLogHelper::hasOperation($event, $operation));
	}

	public function testSetDefaultLimitNew(): void {
		$this->mockStoredLimit(null);
		$this->appConfig->expects($this->once())
			->method('setValueInt')
			->with('files_downloadlimit', 'default-download-limit', 5)
			->willReturn(true);

		$this->controller->setDefaultLimit(5);

		$this->assertSingleAuditEvent(
			'files_downloadlimit.default_limit.updated',
			'The default download limit has been set to %s',
			[
				'limit' => 5,
				'previousLimit' => null,
			],
		);
	}

	public function testSetDefaultLimitChanged(): void {
		$this->mockStoredLimit(3);
		$this->appConfig->expects($this->once())
			->method('setValueInt')
			->with('files_downloadlimit', 'default-download-limit', 5)
			->willReturn(true);

		$this->controller->setDefaultLimit(5);

		$this->assertSingleAuditEvent(
			'files_downloadlimit.default_limit.updated',
			'The default download limit has been set to %s',
			[
				'limit' => 5,
				'previousLimit' => 3,
			],
		);
	}

	public function testSetDefaultLimitUnchanged(): void {
		$this->mockStoredLimit(5);
		$this->appConfig->expects($this->once())
			->method('setValueInt')
			->with('files_downloadlimit', 'default-download-limit', 5)
			->willReturn(false);

		$this->controller->setDefaultLimit(5);

		$this->assertSame([], $this->dispatched);
	}

	public function testSetDefaultLimitInvalid(): void {
		$this->appConfig->expects($this->never())->method('setValueInt');

		try {
			$this->controller->setDefaultLimit(0);
			$this->fail('Expected OCSBadRequestException');
		} catch (OCSBadRequestException) {
		}

		$this->assertSame([], $this->dispatched);
	}

	public function testRemoveDefaultLimit(): void {
		$this->mockStoredLimit(3);
		$this->appConfig->expects($this->once())
			->method('deleteKey')
			->with('files_downloadlimit', 'default-download-limit');

		$this->controller->removeDefaultLimit();

		$this->assertSingleAuditEvent(
			'files_downloadlimit.default_limit.removed',
			'The default download limit has been removed',
			[
				'previousLimit' => 3,
			],
		);
	}

	public function testRemoveDefaultLimitUnset(): void {
		$this->mockStoredLimit(null);
		$this->appConfig->expects($this->never())->method('deleteKey');

		$this->controller->removeDefaultLimit();

		$this->assertSame([], $this->dispatched);
	}
}
