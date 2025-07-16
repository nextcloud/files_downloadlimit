<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCP\Capabilities\ICapability;
use OCP\IAppConfig;

class Capabilities implements ICapability {

	public function __construct(
		private readonly IAppConfig $config,
	) {
	}

	/**
	 * @return array{downloadlimit: array{'default-limit': int, enabled: true}}
	 */
	public function getCapabilities(): array {
		return [
			'downloadlimit' => [
				'enabled' => true,
				'default-limit' => $this->config->getValueInt(Application::APP_ID, 'default-download-limit', -1),
			]
		];
	}
}
