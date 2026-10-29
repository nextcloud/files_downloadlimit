<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\Controller;

use OCA\Files_DownloadLimit\Controller\ApiController;
use OCA\Files_DownloadLimit\Db\Limit;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCA\Files_DownloadLimit\Tests\Unit\AuditLog\AuditLogHelper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\AppFramework\OCS\OCSNotFoundException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IConfig;
use OCP\IRequest;
use OCP\IUser;
use OCP\IUserSession;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use OCP\Share\IManager;
use OCP\Share\IShare;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\MockObject\Stub;
use PHPUnit\Framework\TestCase;

class ApiControllerTest extends TestCase {
	private IManager&MockObject $shareManager;
	private IUserSession&Stub $userSession;
	private LimitMapper&MockObject $mapper;
	private IEventDispatcher&Stub $eventDispatcher;
	private ApiController $controller;

	/** @var list<Event> */
	private array $dispatched = [];

	protected function setUp(): void {
		parent::setUp();

		$this->shareManager = $this->createMock(IManager::class);
		$this->userSession = $this->createStub(IUserSession::class);
		$this->mapper = $this->createMock(LimitMapper::class);
		$this->eventDispatcher = $this->createStub(IEventDispatcher::class);
		$this->eventDispatcher->method('dispatchTyped')
			->willReturnCallback(function (Event $event): void {
				$this->dispatched[] = $event;
			});

		$this->controller = new ApiController(
			$this->createStub(IRequest::class),
			$this->createStub(IConfig::class),
			$this->shareManager,
			$this->userSession,
			$this->mapper,
			$this->eventDispatcher,
		);
	}

	private function mockShare(string $sharedBy = 'alice'): void {
		$user = $this->createStub(IUser::class);
		$user->method('getUID')->willReturn('alice');
		$this->userSession->method('getUser')->willReturn($user);

		$share = $this->createStub(IShare::class);
		$share->method('getId')->willReturn('42');
		$share->method('getSharedBy')->willReturn($sharedBy);
		$share->method('getShareType')->willReturn(IShare::TYPE_LINK);
		$share->method('getNodeType')->willReturn('file');
		$this->shareManager->method('getShareByToken')->with('token')->willReturn($share);
	}

	private function existingLimit(int $limit, int $downloads): Limit {
		$shareLimit = new Limit();
		$shareLimit->setId('token');
		$shareLimit->setLimit($limit);
		$shareLimit->setDownloads($downloads);
		return $shareLimit;
	}

	private function assertSingleAuditEvent(string $operation, string $message, array $parameters): void {
		$this->assertCount(1, $this->dispatched);
		$event = $this->dispatched[0];
		$this->assertInstanceOf(CriticalActionPerformedEvent::class, $event);
		$this->assertSame($message, $event->getLogMessage());
		$this->assertSame($parameters, $event->getParameters());
		$this->assertTrue(AuditLogHelper::hasOperation($event, $operation));
	}

	public function testSetDownloadLimitNew(): void {
		$this->mockShare();
		$this->mapper->method('get')->willThrowException(new DoesNotExistException(''));
		$this->mapper->expects($this->once())->method('insert')->willReturnArgument(0);
		$this->mapper->expects($this->never())->method('update');

		$this->controller->setDownloadLimit('token', 5);

		$this->assertSingleAuditEvent(
			'files_downloadlimit.share_limit.set',
			'The download limit of the share with ID "%s" has been set to %s',
			[
				'shareId' => '42',
				'limit' => 5,
				'previousLimit' => null,
				'previousDownloads' => null,
			],
		);
	}

	public function testSetDownloadLimitExisting(): void {
		$this->mockShare();
		$this->mapper->method('get')->willReturn($this->existingLimit(3, 2));
		$this->mapper->expects($this->never())->method('insert');
		$this->mapper->expects($this->once())->method('update')->willReturnArgument(0);

		$this->controller->setDownloadLimit('token', 10);

		$this->assertSingleAuditEvent(
			'files_downloadlimit.share_limit.set',
			'The download limit of the share with ID "%s" has been set to %s',
			[
				'shareId' => '42',
				'limit' => 10,
				'previousLimit' => 3,
				'previousDownloads' => 2,
			],
		);
	}

	public function testSetDownloadLimitInvalidLimit(): void {
		$this->mockShare();
		$this->mapper->expects($this->never())->method('insert');
		$this->mapper->expects($this->never())->method('update');

		try {
			$this->controller->setDownloadLimit('token', 0);
			$this->fail('Expected OCSBadRequestException');
		} catch (OCSBadRequestException) {
		}

		$this->assertSame([], $this->dispatched);
	}

	public function testSetDownloadLimitNotOwner(): void {
		$this->mockShare('bob');
		$this->mapper->expects($this->never())->method('insert');
		$this->mapper->expects($this->never())->method('update');

		try {
			$this->controller->setDownloadLimit('token', 5);
			$this->fail('Expected OCSNotFoundException');
		} catch (OCSNotFoundException) {
		}

		$this->assertSame([], $this->dispatched);
	}

	public function testRemoveDownloadLimit(): void {
		$this->mockShare();
		$shareLimit = $this->existingLimit(3, 1);
		$this->mapper->method('get')->willReturn($shareLimit);
		$this->mapper->expects($this->once())->method('delete')->with($shareLimit)->willReturnArgument(0);

		$this->controller->removeDownloadLimit('token');

		$this->assertSingleAuditEvent(
			'files_downloadlimit.share_limit.removed',
			'The download limit of the share with ID "%s" has been removed',
			[
				'shareId' => '42',
				'previousLimit' => 3,
				'previousDownloads' => 1,
			],
		);
	}

	public function testRemoveDownloadLimitWithoutLimit(): void {
		$this->mockShare();
		$this->mapper->method('get')->willThrowException(new DoesNotExistException(''));
		$this->mapper->expects($this->never())->method('delete');

		$this->controller->removeDownloadLimit('token');

		$this->assertSame([], $this->dispatched);
	}

	public function testRemoveDownloadLimitNotOwner(): void {
		$this->mockShare('bob');
		$this->mapper->expects($this->never())->method('delete');

		try {
			$this->controller->removeDownloadLimit('token');
			$this->fail('Expected OCSNotFoundException');
		} catch (OCSNotFoundException) {
		}

		$this->assertSame([], $this->dispatched);
	}
}
