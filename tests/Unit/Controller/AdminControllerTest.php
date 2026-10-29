<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\Controller;

use OCA\Files_DownloadLimit\Controller\AdminController;
use OCA\Files_DownloadLimit\Service\ConfigService;
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
			new ConfigService($this->appConfig),
		);
	}

	private function mockStoredLimit(?int $limit, bool $enforced = false): void {
		$this->appConfig->method('hasKey')
			->with('files_downloadlimit', 'default-download-limit')
			->willReturn($limit !== null);
		$this->appConfig->method('getValueInt')
			->with('files_downloadlimit', 'default-download-limit')
			->willReturn($limit ?? 0);
		$this->appConfig->method('getValueBool')
			->with('files_downloadlimit', 'enforce-download-limit')
			->willReturn($enforced);
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

	public function testRemoveDefaultLimitEnforced(): void {
		$this->mockStoredLimit(3, true);
		$deletedKeys = [];
		$this->appConfig->expects($this->exactly(2))
			->method('deleteKey')
			->willReturnCallback(function (string $app, string $key) use (&$deletedKeys): void {
				$deletedKeys[] = $app . '/' . $key;
			});

		$this->controller->removeDefaultLimit();

		$this->assertSame([
			'files_downloadlimit/enforce-download-limit',
			'files_downloadlimit/default-download-limit',
		], $deletedKeys);
		$this->assertCount(2, $this->dispatched);
		$this->assertInstanceOf(CriticalActionPerformedEvent::class, $this->dispatched[0]);
		$this->assertTrue(AuditLogHelper::hasOperation($this->dispatched[0], 'files_downloadlimit.limit_enforcement.disabled'));
		$this->assertSame(['previousLimit' => 3], $this->dispatched[0]->getParameters());
		$this->assertInstanceOf(CriticalActionPerformedEvent::class, $this->dispatched[1]);
		$this->assertTrue(AuditLogHelper::hasOperation($this->dispatched[1], 'files_downloadlimit.default_limit.removed'));
	}

	public function testSetLimitEnforced(): void {
		$this->mockStoredLimit(5);
		$this->appConfig->expects($this->once())
			->method('setValueBool')
			->with('files_downloadlimit', 'enforce-download-limit', true)
			->willReturn(true);

		$this->controller->setLimitEnforced(true);

		$this->assertSingleAuditEvent(
			'files_downloadlimit.limit_enforcement.enabled',
			'The default download limit of %s is now enforced as maximum download limit',
			[
				'limit' => 5,
			],
		);
	}

	public function testSetLimitEnforcedWithoutDefaultLimit(): void {
		$this->mockStoredLimit(null);
		$this->appConfig->expects($this->never())->method('setValueBool');

		try {
			$this->controller->setLimitEnforced(true);
			$this->fail('Expected OCSBadRequestException');
		} catch (OCSBadRequestException) {
		}

		$this->assertSame([], $this->dispatched);
	}

	public function testSetLimitEnforcedUnchanged(): void {
		$this->mockStoredLimit(5, true);
		$this->appConfig->expects($this->never())->method('setValueBool');
		$this->appConfig->expects($this->never())->method('deleteKey');

		$this->controller->setLimitEnforced(true);

		$this->assertSame([], $this->dispatched);
	}

	public function testSetLimitNotEnforced(): void {
		$this->mockStoredLimit(5, true);
		$this->appConfig->expects($this->once())
			->method('deleteKey')
			->with('files_downloadlimit', 'enforce-download-limit');

		$this->controller->setLimitEnforced(false);

		$this->assertSingleAuditEvent(
			'files_downloadlimit.limit_enforcement.disabled',
			'The maximum download limit is no longer enforced',
			[
				'previousLimit' => 5,
			],
		);
	}

	public function testSetLimitNotEnforcedUnchanged(): void {
		$this->mockStoredLimit(5);
		$this->appConfig->expects($this->never())->method('setValueBool');
		$this->appConfig->expects($this->never())->method('deleteKey');

		$this->controller->setLimitEnforced(false);

		$this->assertSame([], $this->dispatched);
	}
}
