<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit;

use OCA\Files_DownloadLimit\Service\ConfigService;
use OCP\Capabilities\ICapability;

class Capabilities implements ICapability {

	public function __construct(
		private readonly ConfigService $configService,
	) {
	}

	/**
	 * @return array{downloadlimit: array{'default-limit': int, enabled: true, enforced: bool}}
	 */
	#[\Override]
	public function getCapabilities(): array {
		return [
			'downloadlimit' => [
				'enabled' => true,
				'default-limit' => $this->configService->getDefaultLimit() ?? -1,
				'enforced' => $this->configService->isLimitEnforced(),
			]
		];
	}
}
