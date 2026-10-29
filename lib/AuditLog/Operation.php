<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_DownloadLimit\AuditLog;

/**
 * Operations Files download limit writes to the admin audit log, in the form `app.entity.action`.
 * The values are matched by log consumers (filters, alert rules, SIEM imports), so changing one is a breaking change for them.
 * Case names may be renamed.
 */
enum Operation: string {
	case ShareLimitSet = 'files_downloadlimit.share_limit.set';
	case ShareLimitRemoved = 'files_downloadlimit.share_limit.removed';
	case DefaultLimitUpdated = 'files_downloadlimit.default_limit.updated';
	case DefaultLimitRemoved = 'files_downloadlimit.default_limit.removed';
	case ShareLimitReached = 'files_downloadlimit.share_limit.reached';
	case LimitEnforcementEnabled = 'files_downloadlimit.limit_enforcement.enabled';
	case LimitEnforcementDisabled = 'files_downloadlimit.limit_enforcement.disabled';

	public function description(): string {
		return match ($this) {
			self::ShareLimitSet => 'A share owner set or changed the download limit of a link or mail share, which also resets its download count.',
			self::ShareLimitRemoved => 'A share owner removed the download limit of a link or mail share.',
			self::DefaultLimitUpdated => 'An admin set or changed the default download limit for new link and mail shares.',
			self::DefaultLimitRemoved => 'An admin removed the default download limit for new link and mail shares.',
			self::ShareLimitReached => 'A link or mail share was deleted automatically because its download limit was reached.',
			self::LimitEnforcementEnabled => 'An admin enforced the default download limit as the maximum download limit of link and mail shares.',
			self::LimitEnforcementDisabled => 'An admin stopped enforcing the maximum download limit of link and mail shares.',
		};
	}
}
