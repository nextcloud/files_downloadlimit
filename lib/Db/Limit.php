<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\Files_DownloadLimit\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;

/**
 * @method void setId(string $id)
 * @method string getId()
 *
 * @method void setLimit(int $limit)
 * @method int getLimit()
 *
 * @method void setDownloads(int $downloads)
 * @method int getDownloads()
 */
class Limit extends Entity implements JsonSerializable {
	protected $limit;
	protected $downloads;

	public function __construct() {
		$this->addType('id', 'string');
		$this->addType('limit', 'integer');
		$this->addType('downloads', 'integer');
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->id,
			'limit' => $this->limit,
			'downloads' => $this->downloads
		];
	}
}
