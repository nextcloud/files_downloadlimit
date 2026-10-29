<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\Service;

use OCA\Files_DownloadLimit\Db\Limit;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCA\Files_DownloadLimit\Service\LimitService;
use OCA\Files_DownloadLimit\Tests\Unit\AuditLog\AuditLogHelper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use OCP\Share\IManager;
use OCP\Share\IShare;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class LimitServiceTest extends TestCase {
	private IManager&MockObject $manager;
	private LimitMapper&MockObject $mapper;
	private LoggerInterface&MockObject $logger;
	private LimitService $service;

	/** @var list<Event> */
	private array $dispatched = [];

	protected function setUp(): void {
		parent::setUp();

		$this->manager = $this->createMock(IManager::class);
		$this->mapper = $this->createMock(LimitMapper::class);
		$this->logger = $this->createMock(LoggerInterface::class);
		$eventDispatcher = $this->createStub(IEventDispatcher::class);
		$eventDispatcher->method('dispatchTyped')
			->willReturnCallback(function (Event $event): void {
				$this->dispatched[] = $event;
			});

		$this->service = new LimitService(
			$this->manager,
			$this->mapper,
			$eventDispatcher,
			$this->logger,
		);
	}

	private function createShare(?string $token = 'token'): IShare {
		$share = $this->createStub(IShare::class);
		$share->method('getId')->willReturn('42');
		$share->method('getToken')->willReturn($token);
		$share->method('getSharedBy')->willReturn('alice');
		return $share;
	}

	private function createLimit(int $limit, int $downloads): Limit {
		$shareLimit = new Limit();
		$shareLimit->setId('token');
		$shareLimit->setLimit($limit);
		$shareLimit->setDownloads($downloads);
		return $shareLimit;
	}

	public function testCountDownloadReachesLimit(): void {
		$this->logger->expects($this->never())->method('error');
		$share = $this->createShare();
		$shareLimit = $this->createLimit(3, 2);
		$this->mapper->method('get')->with('token')->willReturn($shareLimit);
		$this->manager->expects($this->once())->method('deleteShare')->with($share);
		$this->mapper->expects($this->once())->method('delete')->with($shareLimit)->willReturnArgument(0);
		$this->mapper->expects($this->never())->method('update');

		$this->service->countDownload($share);

		$this->assertCount(1, $this->dispatched);
		$event = $this->dispatched[0];
		$this->assertInstanceOf(CriticalActionPerformedEvent::class, $event);
		$this->assertSame('The share with ID "%s" by "%s" has been deleted because its download limit of %s was reached', $event->getLogMessage());
		$this->assertSame([
			'shareId' => '42',
			'sharedBy' => 'alice',
			'limit' => 3,
		], $event->getParameters());
		$this->assertTrue(AuditLogHelper::hasOperation($event, 'files_downloadlimit.share_limit.reached'));
	}

	public function testCountDownloadBelowLimit(): void {
		$this->logger->expects($this->never())->method('error');
		$shareLimit = $this->createLimit(3, 1);
		$this->mapper->method('get')->with('token')->willReturn($shareLimit);
		$this->manager->expects($this->never())->method('deleteShare');
		$this->mapper->expects($this->once())->method('update')->with($shareLimit)->willReturnArgument(0);

		$this->service->countDownload($this->createShare());

		$this->assertSame(2, $shareLimit->getDownloads());
		$this->assertSame([], $this->dispatched);
	}

	public function testCountDownloadWithoutLimit(): void {
		$this->logger->expects($this->never())->method('error');
		$this->mapper->method('get')->with('token')->willThrowException(new DoesNotExistException(''));
		$this->manager->expects($this->never())->method('deleteShare');
		$this->mapper->expects($this->never())->method('update');

		$this->service->countDownload($this->createShare());

		$this->assertSame([], $this->dispatched);
	}

	public function testCountDownloadWithoutToken(): void {
		$this->logger->expects($this->never())->method('error');
		$this->mapper->expects($this->never())->method('get');
		$this->manager->expects($this->never())->method('deleteShare');

		$this->service->countDownload($this->createShare(null));

		$this->assertSame([], $this->dispatched);
	}

	public function testCountDownloadDeleteShareFails(): void {
		$this->mapper->method('get')->with('token')->willReturn($this->createLimit(1, 0));
		$this->manager->expects($this->once())
			->method('deleteShare')
			->willThrowException(new \RuntimeException('failed'));
		$this->mapper->expects($this->never())->method('delete');
		$this->logger->expects($this->once())->method('error');

		$this->service->countDownload($this->createShare());

		$this->assertSame([], $this->dispatched);
	}
}
