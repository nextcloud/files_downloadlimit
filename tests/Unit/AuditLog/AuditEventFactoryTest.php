<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Tests\Unit\AuditLog;

use OCA\Files_DownloadLimit\AuditLog\AuditEventFactory;
use OCA\Files_DownloadLimit\AuditLog\Operation;
use PHPUnit\Framework\TestCase;

class AuditEventFactoryTest extends TestCase {
	public function testCreate(): void {
		$event = AuditEventFactory::create(
			Operation::ShareLimitSet,
			'The download limit of the share with ID "%s" has been set to %s',
			['shareId' => '42', 'limit' => 3],
		);

		$this->assertSame('The download limit of the share with ID "%s" has been set to %s', $event->getLogMessage());
		$this->assertSame(['shareId' => '42', 'limit' => 3], $event->getParameters());
		$this->assertFalse($event->getObfuscateParameters());
		$this->assertTrue(AuditLogHelper::hasOperation($event, 'files_downloadlimit.share_limit.set'));
	}
}
