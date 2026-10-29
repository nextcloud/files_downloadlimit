<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\Service;

use OCA\Files_DownloadLimit\Service\ConfigService;
use OCP\IAppConfig;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

class ConfigServiceTest extends TestCase {
	private function createService(?int $defaultLimit, bool $enforced): ConfigService {
		$appConfig = $this->createStub(IAppConfig::class);
		$appConfig->method('hasKey')
			->willReturnCallback(fn (string $app, string $key): bool => $app === 'files_downloadlimit' && $key === 'default-download-limit' && $defaultLimit !== null);
		$appConfig->method('getValueInt')
			->willReturnCallback(fn (string $app, string $key): int => $app === 'files_downloadlimit' && $key === 'default-download-limit' ? ($defaultLimit ?? 0) : 0);
		$appConfig->method('getValueBool')
			->willReturnCallback(fn (string $app, string $key): bool => $app === 'files_downloadlimit' && $key === 'enforce-download-limit' && $enforced);
		return new ConfigService($appConfig);
	}

	public static function dataConfig(): array {
		return [
			'no default limit' => [null, false, null, false, null],
			'default limit' => [5, false, 5, false, null],
			'enforced default limit' => [5, true, 5, true, 5],
			'enforced without default limit' => [null, true, null, false, null],
		];
	}

	#[DataProvider('dataConfig')]
	public function testConfig(?int $storedLimit, bool $storedEnforced, ?int $defaultLimit, bool $enforced, ?int $maximumLimit): void {
		$service = $this->createService($storedLimit, $storedEnforced);

		$this->assertSame($defaultLimit, $service->getDefaultLimit());
		$this->assertSame($enforced, $service->isLimitEnforced());
		$this->assertSame($maximumLimit, $service->getMaximumLimit());
	}
}
