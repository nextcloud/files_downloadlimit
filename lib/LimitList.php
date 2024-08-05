<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
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
