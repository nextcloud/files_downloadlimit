<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\Files_DownloadLimit\Db;

use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

/** @template-extends QBMapper<Limit> */
class LimitMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'shares_limits', Limit::class);
	}

	public function get(string $token): Limit {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')
			->from($this->getTableName())
			->where($qb->expr()->eq('id', $qb->createNamedParameter($token)));

		return $this->findEntity($qb);
	}
}
