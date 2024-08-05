<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Controller;

use OCA\Files_DownloadLimit\AppInfo\Application;
use OCA\Files_DownloadLimit\Db\Limit;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\AppFramework\OCS\OCSNotFoundException;
use OCP\AppFramework\OCSController;
use OCP\IConfig;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\Share\Exceptions\ShareNotFound;
use OCP\Share\IManager;
use OCP\Share\IShare;

class ApiController extends OCSController {
	public function __construct(
		IRequest $request,
		private IConfig $config,
		private IManager $shareManager,
		private IUserSession $userSession,
		private LimitMapper $mapper,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	/**
	 * Set the download limit for a given link share
	 */
	#[NoAdminRequired]
	public function setDownloadLimit(string $token, int $limit): DataResponse {
		$this->validateToken($token);

		// Count needs to be at least 1
		if ($limit < 1) {
			throw new OCSBadRequestException('Limit needs to be greater or equal than 1');
		}

		// Getting existing limit and init if unset
		$insert = false;
		try {
			$shareLimit = $this->mapper->get($token);
		} catch (DoesNotExistException $e) {
			$shareLimit = new Limit();
			$shareLimit->setId($token);
			$insert = true;
		}

		// Set new limit
		$shareLimit->setLimit($limit);
		// Reset existing counter
		$shareLimit->setDownloads(0);
		// Update DB
		if ($insert) {
			$this->mapper->insert($shareLimit);
		} else {
			$this->mapper->update($shareLimit);
		}

		return new DataResponse();
	}

	/**
	 * Remove the download limit for a given link share
	 */
	#[NoAdminRequired]
	public function removeDownloadLimit(string $token): DataResponse {
		$this->validateToken($token);

		try {
			$shareLimit = $this->mapper->get($token);
			$this->mapper->delete($shareLimit);
		} catch (DoesNotExistException $e) {
			// Ignore if does not exists
		}

		return new DataResponse();
	}

	/**
	 * Get the download limit for a given link share
	 */
	#[NoAdminRequired]
	public function getDownloadLimit(string $token): DataResponse {
		$this->validateToken($token);

		try {
			$shareLimit = $this->mapper->get($token);
		} catch (DoesNotExistException $e) {
			return new DataResponse([
				'limit' => null,
				'count' => null
			]);
		}

		return new DataResponse([
			'limit' => $shareLimit->getLimit(),
			'count' => $shareLimit->getDownloads()
		]);
	}

	protected function validateToken(string $token = '') {
		$user = $this->userSession->getUser();

		try {
			$share = $this->shareManager->getShareByToken($token);
		} catch (ShareNotFound $e) {
			throw new OCSNotFoundException('Unknown share');
		}

		// Make sure the user is the owner of the share
		if ($user == null || ($share->getSharedBy() !== $user->getUID())) {
			throw new OCSNotFoundException('Unknown share');
		}

		// Download count limit only works on links
		if ($share->getShareType() !== IShare::TYPE_LINK
			&& $share->getShareType() !== IShare::TYPE_EMAIL) {
			throw new OCSNotFoundException('Invalid share type');
		}

		// Download count limit only works on single file shares
		if ($share->getNodeType() !== 'file') {
			throw new OCSNotFoundException('Invalid file type');
		}
	}
}
