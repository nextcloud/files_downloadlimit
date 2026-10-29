<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit;

use OCA\Files_DownloadLimit\Capabilities;
use OCA\Files_DownloadLimit\Service\ConfigService;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

class CapabilitiesTest extends TestCase {
	public static function dataCapabilities(): array {
		return [
			'no default limit' => [null, false, -1],
			'default limit' => [5, false, 5],
			'enforced default limit' => [5, true, 5],
		];
	}

	#[DataProvider('dataCapabilities')]
	public function testGetCapabilities(?int $defaultLimit, bool $enforced, int $expectedLimit): void {
		$configService = $this->createStub(ConfigService::class);
		$configService->method('getDefaultLimit')->willReturn($defaultLimit);
		$configService->method('isLimitEnforced')->willReturn($enforced);

		$capabilities = new Capabilities($configService);

		$this->assertSame([
			'downloadlimit' => [
				'enabled' => true,
				'default-limit' => $expectedLimit,
				'enforced' => $enforced,
			],
		], $capabilities->getCapabilities());
	}
}
