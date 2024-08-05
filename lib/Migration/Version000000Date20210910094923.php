<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Migration;

use Closure;
use Doctrine\DBAL\Types\Types;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000000Date20210910094923 extends SimpleMigrationStep {
	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @return null|ISchemaWrapper
	 */
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('shares_limits')) {
			$table = $schema->createTable('shares_limits');
			$table->addColumn('id', Types::STRING, [
				'notnull' => true,
				'length' => 32,
			]);
			$table->addColumn('limit', Types::BIGINT, [
				'notnull' => true,
				'length' => 8,
			]);
			$table->addColumn('downloads', Types::BIGINT, [
				'notnull' => true,
				'length' => 8,
				'default' => 0,
			]);
			$table->setPrimaryKey(['id']);
		}
		return $schema;
	}
}
