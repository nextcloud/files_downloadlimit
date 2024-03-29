<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
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
