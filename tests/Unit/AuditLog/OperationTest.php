<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\AuditLog;

use OCA\Files_DownloadLimit\AuditLog\Operation;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

class OperationTest extends TestCase {
	public static function dataOperations(): array {
		$data = [];
		foreach (Operation::cases() as $operation) {
			$data[$operation->name] = [$operation];
		}
		return $data;
	}

	#[DataProvider('dataOperations')]
	public function testOperation(Operation $operation): void {
		$this->assertMatchesRegularExpression('/^files_downloadlimit\.[a-z][a-z0-9_]*\.[a-z][a-z0-9_]*$/', $operation->value);
		$this->assertNotSame('', $operation->description());
	}
}
