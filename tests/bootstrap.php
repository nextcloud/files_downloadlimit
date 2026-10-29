<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

require_once __DIR__ . '/../../../tests/bootstrap.php';

\OC::$composerAutoloader->addPsr4('OCA\\Files_DownloadLimit\\', dirname(__DIR__) . '/lib/', true);
\OC::$composerAutoloader->addPsr4('OCA\\Files_DownloadLimit\\Tests\\', __DIR__ . '/', true);
