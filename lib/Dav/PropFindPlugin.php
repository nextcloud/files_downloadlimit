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

namespace OCA\Files_DownloadLimit\Dav;

use OCA\DAV\Connector\Sabre\File as SabreFile;
use OCA\Files_DownloadLimit\Db\Limit;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCA\Files_DownloadLimit\LimitList;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\Files\File;
use OCP\IUser;
use OCP\IUserSession;
use OCP\Share\IManager as IShareManager;
use OCP\Share\IShare;
use Psr\Log\LoggerInterface;
use Sabre\DAV\INode;
use Sabre\DAV\PropFind;
use Sabre\DAV\Server;
use Sabre\DAV\ServerPlugin;

class PropFindPlugin extends ServerPlugin {
	public const DOWNLOAD_LIMITS_PROPERTY = '{http://nextcloud.org/ns}share-download-limits';

	public function __construct(
		private IShareManager $shareManager,
		private IUserSession $userSession,
		private LimitMapper $limitMapper,
		private LoggerInterface $logger,
	) {
	}

	public function initialize(Server $server): void {
		$server->on('propFind', [$this, 'propFind']);
	}

	public function propFind(PropFind $propFind, INode $node) {
		if (!in_array(static::DOWNLOAD_LIMITS_PROPERTY, $propFind->getRequestedProperties(), true)) {
			return;
		}

		if (!($node instanceof SabreFile)) { // Only allowed on files
			return;
		}

		$propFind->handle(
			static::DOWNLOAD_LIMITS_PROPERTY,
			function () use ($node) {
				$user = $this->userSession->getUser();
				if (!($user instanceof IUser)) {
					return new LimitList([]);
				}

				$externalShares = $this->getSharesForTypes(
					$user,
					$node->getNode(),
					[
						IShare::TYPE_LINK,
						IShare::TYPE_EMAIL,
					],
				);

				/** @var Limit[] $limits */
				$limits = array_values(array_filter(array_map(function (IShare $share) {
					try {
						return $this->limitMapper->get($share->getToken());
					} catch (DoesNotExistException $e) {
						// Allow as no limit has been set
						return null;
					}
				}, $externalShares)));

				return new LimitList($limits);
			},
		);
	}

	/**
	 * @param int[] $types
	 * @return IShare[]
	 */
	private function getSharesForTypes(IUser $user, File $file, array $types) {
		/** @var IShare[] $shares */
		$shares = [];
		foreach ($types as $type) {
			$shares = array_merge($shares, $this->shareManager->getSharesBy($user->getUID(), $type, $file, false, -1, 0));
		}
		return $shares;
	}
}
