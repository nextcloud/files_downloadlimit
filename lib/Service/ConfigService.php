<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Service;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCP\IAppConfig;

class ConfigService {
	public const KEY_DEFAULT_LIMIT = 'default-download-limit';
	public const KEY_ENFORCE_LIMIT = 'enforce-download-limit';

	public function __construct(
		private IAppConfig $appConfig,
	) {
	}

	/**
	 * The default download limit for new shares, or null if none is configured
	 */
	public function getDefaultLimit(): ?int {
		if (!$this->appConfig->hasKey(Application::APP_ID, self::KEY_DEFAULT_LIMIT)) {
			return null;
		}
		return $this->appConfig->getValueInt(Application::APP_ID, self::KEY_DEFAULT_LIMIT);
	}

	/**
	 * Whether every share needs a download limit not greater than the default limit
	 */
	public function isLimitEnforced(): bool {
		return $this->getMaximumLimit() !== null;
	}

	/**
	 * The maximum download limit a share may have, or null if the limit is not enforced.
	 * Enforcement is only effective while a default limit is configured.
	 */
	public function getMaximumLimit(): ?int {
		$defaultLimit = $this->getDefaultLimit();
		if ($defaultLimit === null || !$this->appConfig->getValueBool(Application::APP_ID, self::KEY_ENFORCE_LIMIT)) {
			return null;
		}
		return $defaultLimit;
	}
}
