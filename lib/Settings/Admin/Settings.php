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

namespace OCA\Files_DownloadLimit\Settings\Admin;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IAppConfig;
use OCP\Settings\ISettings;
use OCP\Util;

class Settings implements ISettings {
	public function __construct(
		private IInitialState $initialState,
		private IAppConfig $appConfig,
	) {
	}

	public function getForm(): TemplateResponse {
		$this->initialState->provideInitialState(
			'default-download-limit',
			$this->appConfig->getValueInt(Application::APP_ID, 'default-download-limit', -1),
		);

		Util::addStyle(Application::APP_ID, Application::APP_ID . '-admin');
		Util::addScript(Application::APP_ID, Application::APP_ID . '-admin');

		return new TemplateResponse(Application::APP_ID, 'admin', [], TemplateResponse::RENDER_AS_USER);
	}

	public function getSection(): string {
		return 'sharing';
	}

	public function getPriority(): int {
		return 10;
	}
}
