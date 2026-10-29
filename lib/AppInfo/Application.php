<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\AppInfo;

use OCA\DAV\Events\SabrePluginAddEvent;
use OCA\Files\Event\LoadSidebar;
use OCA\Files_DownloadLimit\Capabilities;
use OCA\Files_DownloadLimit\Listener\BeforeNodeReadListener;
use OCA\Files_DownloadLimit\Listener\BeforeSabrePubliclyLoadedListener;
use OCA\Files_DownloadLimit\Listener\BeforeTemplateRenderedListener;
use OCA\Files_DownloadLimit\Listener\LoadSidebarListener;
use OCA\Files_DownloadLimit\Listener\SabrePluginAddListener;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\BeforeSabrePubliclyLoadedEvent;
use OCP\Files\Events\Node\BeforeNodeReadEvent;

class Application extends App implements IBootstrap {
	public const APP_ID = 'files_downloadlimit';

	public function __construct(array $urlParams = []) {
		parent::__construct(self::APP_ID, $urlParams);
	}

	#[\Override]
	public function register(IRegistrationContext $context): void {
		$context->registerEventListener(SabrePluginAddEvent::class, SabrePluginAddListener::class);
		$context->registerEventListener(BeforeSabrePubliclyLoadedEvent::class, BeforeSabrePubliclyLoadedListener::class);

		$context->registerEventListener(BeforeTemplateRenderedEvent::class, BeforeTemplateRenderedListener::class);
		$context->registerEventListener(LoadSidebar::class, LoadSidebarListener::class);
		$context->registerEventListener(BeforeNodeReadEvent::class, BeforeNodeReadListener::class);

		$context->registerCapability(Capabilities::class);
	}

	#[\Override]
	public function boot(IBootContext $context): void {
	}
}
