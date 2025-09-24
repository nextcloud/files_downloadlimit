<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

$requirements = [
	'version' => '1',
];

return [
	'ocs' => [
		['name' => 'Api#getDownloadLimit', 'url' => '/api/v{version}/{token}/limit', 'verb' => 'GET', 'requirements' => $requirements],
		['name' => 'Api#setDownloadLimit', 'url' => '/api/v{version}/{token}/limit', 'verb' => 'PUT', 'requirements' => $requirements],
		['name' => 'Api#removeDownloadLimit', 'url' => '/api/v{version}/{token}/limit', 'verb' => 'DELETE', 'requirements' => $requirements],
	]
];
