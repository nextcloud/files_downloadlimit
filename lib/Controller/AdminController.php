<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Controller;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCP\AppFramework\Http\Attribute\ApiRoute;
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

	#[ApiRoute(verb: 'PUT', url: '/api/v{version}/limit', requirements: ['version' => 1])]
	public function setDefaultLimit(int $limit): DataResponse {
		if ($limit < 1) {
			throw new OCSBadRequestException('Minimum limit is 1');
		}

		$this->appConfig->setValueInt(Application::APP_ID, 'default-download-limit', $limit);
		return new DataResponse();
	}

	#[ApiRoute(verb: 'DELETE', url: '/api/v{version}/limit', requirements: ['version' => 1])]
	public function removeDefaultLimit(): DataResponse {
		$this->appConfig->deleteKey(Application::APP_ID, 'default-download-limit');
		return new DataResponse();
	}
}
