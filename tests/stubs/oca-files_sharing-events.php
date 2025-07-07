<?php

/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_Sharing\Event {
	use OCP\EventDispatcher\Event;
	use OCP\Share\IShare;

	class BeforeTemplateRenderedEvent extends Event {
		/**
		 * @since 20.0.0
		 */
		public const SCOPE_PUBLIC_SHARE_AUTH = 'publicShareAuth';

		/**
		 * @since 20.0.0
		 */
		public function getShare(): IShare {
		}

		/**
		 * @since 20.0.0
		 */
		public function getScope(): ?string {
		}
	}

	class ShareLinkAccessedEvent extends Event {
		public function getShare(): IShare {
		}

		public function getStep(): string {
		}

		public function getErrorCode(): int {
		}

		public function getErrorMessage(): string {
		}
	}
}
