<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Dav;

use OCA\DAV\Connector\Sabre\File as SabreFile;
use OCA\DAV\Connector\Sabre\FilesPlugin;
use OCA\Files_DownloadLimit\Db\LimitMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\Files\NotFoundException;
use OCP\Files\Storage\ISharedStorage;
use OCP\Share\IShare;
use Sabre\DAV\INode;
use Sabre\DAV\PropFind;
use Sabre\DAV\Server;
use Sabre\DAV\ServerPlugin;

/**
 * Hides direct download URLs (e.g. presigned object store URLs) of files
 * accessed through a share with a download limit, as downloads through
 * such URLs bypass the download counter.
 */
class DirectDownloadPlugin extends ServerPlugin {
	public function __construct(
		private LimitMapper $limitMapper,
	) {
	}

	#[\Override]
	public function initialize(Server $server): void {
		// Run after the files plugin to override its values
		$server->on('propFind', [$this, 'propFind'], 150);
	}

	public function propFind(PropFind $propFind, INode $node): void {
		if (!($node instanceof SabreFile)) {
			return;
		}

		$requestedProperties = $propFind->getRequestedProperties();
		if (!in_array(FilesPlugin::DOWNLOADURL_PROPERTYNAME, $requestedProperties, true)
			&& !in_array(FilesPlugin::DOWNLOADURL_EXPIRATION_PROPERTYNAME, $requestedProperties, true)) {
			return;
		}

		if (!$this->hasDownloadLimit($node)) {
			return;
		}

		$propFind->set(FilesPlugin::DOWNLOADURL_PROPERTYNAME, false);
		$propFind->set(FilesPlugin::DOWNLOADURL_EXPIRATION_PROPERTYNAME, false);
	}

	private function hasDownloadLimit(SabreFile $node): bool {
		try {
			$storage = $node->getNode()->getStorage();
		} catch (NotFoundException) {
			return false;
		}

		if (!$storage->instanceOfStorage(ISharedStorage::class)) {
			return false;
		}

		/** @var ISharedStorage $storage */
		$share = $storage->getShare();
		if (!in_array($share->getShareType(), [IShare::TYPE_EMAIL, IShare::TYPE_LINK], true)) {
			return false;
		}

		$token = $share->getToken();
		if ($token === null) {
			return false;
		}

		try {
			$this->limitMapper->get($token);
			return true;
		} catch (DoesNotExistException) {
			return false;
		}
	}
}
