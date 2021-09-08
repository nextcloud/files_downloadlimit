<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2020 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Files_DownloadCounter\Controller;

use OCA\Files_DownloadCounter\AppInfo\Application;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\Response;
use OCP\AppFramework\OCS\OCSBadRequestException;
use OCP\AppFramework\OCS\OCSNotFoundException;
use OCP\AppFramework\OCSController;
use OCP\IConfig;
use OCP\IRequest;
use OCP\IUserSession;
use OCP\Share\Exceptions\ShareNotFound;
use OCP\Share\IManager;

class ApiController extends OCSController {

	/** @var IConfig */
	private $config;

	/** @var IManager */
	private $shareManager;

	/** @var IUserSession */
	private $userSession;

	public function __construct(IRequest $request,
								IConfig $config,
								IManager $shareManager,
								IUserSession $userSession) {
		parent::__construct(Application::APP_ID, $request);
		$this->config = $config;
		$this->shareManager = $shareManager;
		$this->userSession = $userSession;
	}

	/**
	 * @NoAdminRequired
	 *
	 * Set the download limit for a given link share
	 */
	public function setDownloadLimit(string $token, int $limit = 0): Response {
		$user = $this->userSession->getUser();

		try {
			$share = $this->shareManager->getShareByToken($token);
		} catch (ShareNotFound $e) {
			throw new OCSNotFoundException('Unknown share');
		}

		// Make sure the user is owner of the share
		if ($user == null || $share->getShareOwner() !== $user->getUID()) {
			throw new OCSNotFoundException('Unknown share');
		}

		// Download count limit only works on single file shares
		if ($share->getNodeType() !== 'file') {
			throw new OCSNotFoundException('Invalid share type');
		}
		
		if ($limit === -1) {
			$this->config->deleteAppValue(Application::APP_ID, 'download_limit_' . $token);
			return new DataResponse();
		}

		// Count needs to be at least 1
		if ($limit < 1) {
			throw new OCSBadRequestException('Limit needs to be greater or equal than 1');
		}

		$this->config->setAppValue(Application::APP_ID, 'download_limit_' . $token, $limit);

		return new DataResponse();
	}

	/**
	 * @NoAdminRequired
	 *
	 * Remove the download limit for a given link share
	 */
	public function removeDownloadLimit(string $token): Response {
		return $this->setDownloadLimit($token, -1);
	}
}
