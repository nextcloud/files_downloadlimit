<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\Service;

use OCA\Files_DownloadLimit\Db\Limit;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCA\Files_DownloadLimit\Service\ConfigService;
use OCA\Files_DownloadLimit\Service\LimitService;
use OCA\Files_DownloadLimit\Tests\Unit\AuditLog\AuditLogHelper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use OCP\Share\IManager;
use OCP\Share\IShare;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\MockObject\Stub;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class LimitServiceTest extends TestCase {
	private IManager&MockObject $manager;
	private LimitMapper&MockObject $mapper;
	private LoggerInterface&MockObject $logger;
	private ConfigService&Stub $configService;
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

		$this->configService = $this->createStub(ConfigService::class);

		$this->service = new LimitService(
			$this->manager,
			$this->mapper,
			$eventDispatcher,
			$this->logger,
			$this->configService,
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

	private function createNewShare(int $shareType = IShare::TYPE_LINK, string $nodeType = 'file', ?string $token = 'token'): IShare {
		$share = $this->createStub(IShare::class);
		$share->method('getToken')->willReturn($token);
		$share->method('getShareType')->willReturn($shareType);
		$share->method('getNodeType')->willReturn($nodeType);
		return $share;
	}

	public static function dataEnforceLimitShareTypes(): array {
		return [
			'link' => [IShare::TYPE_LINK],
			'mail' => [IShare::TYPE_EMAIL],
		];
	}

	#[DataProvider('dataEnforceLimitShareTypes')]
	public function testEnforceLimit(int $shareType): void {
		$this->logger->expects($this->never())->method('error');
		$this->manager->expects($this->never())->method('deleteShare');
		$this->configService->method('getMaximumLimit')->willReturn(5);
		$this->mapper->method('get')->with('token')->willThrowException(new DoesNotExistException(''));
		$this->mapper->expects($this->never())->method('update');
		$this->mapper->expects($this->once())
			->method('insert')
			->with($this->callback(fn (Limit $limit): bool => $limit->getId() === 'token' && $limit->getLimit() === 5 && $limit->getDownloads() === 0))
			->willReturnArgument(0);

		$this->service->enforceLimit($this->createNewShare($shareType));
	}

	public function testEnforceLimitReplacesStoredLimit(): void {
		$this->logger->expects($this->never())->method('error');
		$this->manager->expects($this->never())->method('deleteShare');
		$this->configService->method('getMaximumLimit')->willReturn(5);
		$shareLimit = $this->createLimit(10, 7);
		$this->mapper->method('get')->with('token')->willReturn($shareLimit);
		$this->mapper->expects($this->never())->method('insert');
		$this->mapper->expects($this->once())->method('update')->with($shareLimit)->willReturnArgument(0);

		$this->service->enforceLimit($this->createNewShare());

		$this->assertSame(5, $shareLimit->getLimit());
		$this->assertSame(0, $shareLimit->getDownloads());
	}

	public static function dataEnforceLimitSkipped(): array {
		return [
			'not enforced' => [null, IShare::TYPE_LINK, 'file', 'token'],
			'user share' => [5, IShare::TYPE_USER, 'file', 'token'],
			'folder' => [5, IShare::TYPE_LINK, 'folder', 'token'],
			'no token' => [5, IShare::TYPE_LINK, 'file', null],
		];
	}

	#[DataProvider('dataEnforceLimitSkipped')]
	public function testEnforceLimitSkipped(?int $maximumLimit, int $shareType, string $nodeType, ?string $token): void {
		$this->logger->expects($this->never())->method('error');
		$this->manager->expects($this->never())->method('deleteShare');
		$this->configService->method('getMaximumLimit')->willReturn($maximumLimit);
		$this->mapper->expects($this->never())->method('insert');
		$this->mapper->expects($this->never())->method('update');

		$this->service->enforceLimit($this->createNewShare($shareType, $nodeType, $token));
	}
}
