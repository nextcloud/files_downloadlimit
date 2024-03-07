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

namespace OCA\Files_DownloadLimit\Controller;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\AppFramework\OCSController;
use OCP\IAppConfig;
use OCP\IRequest;

class AdminController extends OCSController {
	public function __construct(
		IRequest $request,
		private IAppConfig $appConfig,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	public function setDefaultLimit(int $limit): DataResponse {
		if ($limit < 1) {
			throw new OCSBadRequestException('Minimum limit is 1');
		}

		$this->appConfig->setValueInt(Application::APP_ID, 'default-download-limit', $limit);
		return new DataResponse();
	}
}
