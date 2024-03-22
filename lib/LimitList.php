<?php

declare(strict_types=1);

/**
 * @copyright 2024 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Files_DownloadLimit;

use OCA\Files_DownloadLimit\Db\Limit;
use Sabre\Xml\Writer;
use Sabre\Xml\XmlSerializable;

class LimitList implements XmlSerializable {
	public const NS_NEXTCLOUD = 'http://nextcloud.org/ns';

	/** @var Limit[] */
	private $limits;

	/**
	 * @param Limit[] $limits
	 */
	public function __construct(
		array $limits,
	) {
		$this->limits = $limits;
	}

	public function xmlSerialize(Writer $writer): void {
		foreach ($this->limits as $limit) {
			$writer->startElement('{' . static::NS_NEXTCLOUD . '}share-download-limit');
			$writer->writeElement('{' . static::NS_NEXTCLOUD . '}token', $limit->getId());
			$writer->writeElement('{' . static::NS_NEXTCLOUD . '}limit', $limit->getLimit());
			$writer->writeElement('{' . static::NS_NEXTCLOUD . '}count', $limit->getDownloads());
			$writer->endElement();
		}
	}
}
