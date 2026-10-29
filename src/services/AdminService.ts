/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { showError } from '@nextcloud/dialogs'
import { t } from '@nextcloud/l10n'
import { generateOcsUrl } from '@nextcloud/router'
import { logger } from '../logger.ts'

/**
 * Set the default download limit for all shares.
 *
 * @param limit - The new default limit
 */
export async function setDefaultLimit(limit: number): Promise<boolean> {
	try {
		await axios.put(generateOcsUrl('/apps/files_downloadlimit/api/v1/limit'), {
			limit,
		})
		return true
	} catch (error) {
		logger.error('Failed to set default download limit', { error })
		showError(t('files_downloadlimit', 'Failed to set default download limit'))
	}
	return false
}

/**
 * Unset the configured default limit
 */
export async function removeDefaultLimit(): Promise<boolean> {
	try {
		await axios.delete(generateOcsUrl('/apps/files_downloadlimit/api/v1/limit'))
		return true
	} catch (error) {
		logger.error('Failed to remove default download limit', { error })
		showError(t('files_downloadlimit', 'Failed to remove default download limit'))
	}
	return false
}

/**
 * Enforce the default download limit as maximum download limit of all shares.
 *
 * @param enforced - Whether the limit should be enforced
 */
export async function setLimitEnforced(enforced: boolean): Promise<boolean> {
	try {
		await axios.put(generateOcsUrl('/apps/files_downloadlimit/api/v1/limit/enforced'), {
			enforced,
		})
		return true
	} catch (error) {
		logger.error('Failed to change download limit enforcement', { error })
		showError(t('files_downloadlimit', 'Failed to change download limit enforcement'))
	}
	return false
}
