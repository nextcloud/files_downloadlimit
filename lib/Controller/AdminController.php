<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Controller;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCA\Files_DownloadLimit\AuditLog\AuditEventFactory;
use OCA\Files_DownloadLimit\AuditLog\Operation;
use OCA\Files_DownloadLimit\Service\ConfigService;
use OCP\AppFramework\Http\Attribute\ApiRoute;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\AppFramework\OCSController;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IAppConfig;
use OCP\IRequest;

class AdminController extends OCSController {
	public function __construct(
		IRequest $request,
		private IAppConfig $appConfig,
		private IEventDispatcher $eventDispatcher,
		private ConfigService $configService,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[ApiRoute(verb: 'PUT', url: '/api/v{version}/limit', requirements: ['version' => 1])]
	public function setDefaultLimit(int $limit): DataResponse {
		if ($limit < 1) {
			throw new OCSBadRequestException('Minimum limit is 1');
		}

		$previousLimit = $this->configService->getDefaultLimit();
		if (!$this->appConfig->setValueInt(Application::APP_ID, ConfigService::KEY_DEFAULT_LIMIT, $limit)) {
			return new DataResponse();
		}

		$this->eventDispatcher->dispatchTyped(AuditEventFactory::create(
			Operation::DefaultLimitUpdated,
			'The default download limit has been set to %s',
			[
				'limit' => $limit,
				'previousLimit' => $previousLimit,
			],
		));
		return new DataResponse();
	}

	#[ApiRoute(verb: 'DELETE', url: '/api/v{version}/limit', requirements: ['version' => 1])]
	public function removeDefaultLimit(): DataResponse {
		$previousLimit = $this->configService->getDefaultLimit();
		if ($previousLimit === null) {
			return new DataResponse();
		}

		if ($this->configService->isLimitEnforced()) {
			$this->disableLimitEnforcement();
		}

		$this->appConfig->deleteKey(Application::APP_ID, ConfigService::KEY_DEFAULT_LIMIT);
		$this->eventDispatcher->dispatchTyped(AuditEventFactory::create(
			Operation::DefaultLimitRemoved,
			'The default download limit has been removed',
			[
				'previousLimit' => $previousLimit,
			],
		));
		return new DataResponse();
	}

	/**
	 * Enforce the default download limit as maximum download limit of all shares
	 *
	 * @param bool $enforced Whether the limit should be enforced
	 * @throws OCSBadRequestException No default limit is configured
	 */
	#[ApiRoute(verb: 'PUT', url: '/api/v{version}/limit/enforced', requirements: ['version' => 1])]
	public function setLimitEnforced(bool $enforced): DataResponse {
		if ($enforced === $this->configService->isLimitEnforced()) {
			return new DataResponse();
		}

		if (!$enforced) {
			$this->disableLimitEnforcement();
			return new DataResponse();
		}

		$limit = $this->configService->getDefaultLimit();
		if ($limit === null) {
			throw new OCSBadRequestException('A default limit is required to enforce it');
		}

		$this->appConfig->setValueBool(Application::APP_ID, ConfigService::KEY_ENFORCE_LIMIT, true);
		$this->eventDispatcher->dispatchTyped(AuditEventFactory::create(
			Operation::LimitEnforcementEnabled,
			'The default download limit of %s is now enforced as maximum download limit',
			[
				'limit' => $limit,
			],
		));
		return new DataResponse();
	}

	private function disableLimitEnforcement(): void {
		$limit = $this->configService->getMaximumLimit();
		$this->appConfig->deleteKey(Application::APP_ID, ConfigService::KEY_ENFORCE_LIMIT);
		$this->eventDispatcher->dispatchTyped(AuditEventFactory::create(
			Operation::LimitEnforcementDisabled,
			'The maximum download limit is no longer enforced',
			[
				'previousLimit' => $limit,
			],
		));
	}
}
