<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\Listener;

use OCA\Files_DownloadLimit\Dav\DirectDownloadPlugin;
use OCP\BeforeSabrePubliclyLoadedEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use Psr\Container\ContainerInterface;

/** @template-implements IEventListener<BeforeSabrePubliclyLoadedEvent> */
class BeforeSabrePubliclyLoadedListener implements IEventListener {
	public function __construct(
		private ContainerInterface $container,
	) {
	}

	#[\Override]
	public function handle(Event $event): void {
		if (!($event instanceof BeforeSabrePubliclyLoadedEvent)) {
			return;
		}

		$server = $event->getServer();
		$plugin = $this->container->get(DirectDownloadPlugin::class);
		$server->addPlugin($plugin);
	}
}
