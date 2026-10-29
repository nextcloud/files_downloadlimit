<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Settings\Admin;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCA\Files_DownloadLimit\Service\ConfigService;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\Settings\ISettings;
use OCP\Util;

class Settings implements ISettings {
	public function __construct(
		private IInitialState $initialState,
		private ConfigService $configService,
	) {
	}

	#[\Override]
	public function getForm(): TemplateResponse {
		$this->initialState->provideInitialState(
			'default-download-limit',
			$this->configService->getDefaultLimit() ?? -1,
		);
		$this->initialState->provideInitialState(
			'enforce-download-limit',
			$this->configService->isLimitEnforced(),
		);

		Util::addStyle(Application::APP_ID, Application::APP_ID . '-admin');
		Util::addScript(Application::APP_ID, Application::APP_ID . '-admin');

		return new TemplateResponse(Application::APP_ID, 'admin', [], TemplateResponse::RENDER_AS_USER);
	}

	#[\Override]
	public function getSection(): string {
		return 'sharing';
	}

	#[\Override]
	public function getPriority(): int {
		return 10;
	}
}
