<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\Files_DownloadLimit;

use OCP\Capabilities\ICapability;

class Capabilities implements ICapability {

	/**
	 * @return array{downloadlimit: array{enabled: true}}
	 */
	public function getCapabilities(): array {
		return [
			'downloadlimit' => [
				'enabled' => true
			]
		];
	}
}
