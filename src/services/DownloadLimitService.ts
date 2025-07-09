/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { generateOcsUrl } from '@nextcloud/router'

type Nullable<T> = null | T

export interface DownloadLimit {
	limit: Nullable<number>
	count: Nullable<number>
}

/**
 * Query the download limit of a given share.
 *
 * @param token - The share token
 */
export async function getDownloadLimit(token: string): Promise<DownloadLimit> {
	const response = await axios.get(generateOcsUrl('/apps/files_downloadlimit/api/v1/{token}/limit', { token }))
	return response.data.ocs.data
}

/**
 * Set the download limit for a given share.
 *
 * @param token - The share token
 * @param limit - The new limit
 */
export async function setDownloadLimit(token: string, limit: number): Promise<[]> {
	const response = await axios.put(generateOcsUrl('/apps/files_downloadlimit/api/v1/{token}/limit', { token }), {
		limit,
	})
	return response.data.ocs.data
}

/**
 * Unset the download limit for a given share.
 *
 * @param token - The share token
 */
export async function deleteDownloadLimit(token: string): Promise<[]> {
	const response = await axios.delete(generateOcsUrl('/apps/files_downloadlimit/api/v1/{token}/limit', { token }))
	return response.data.ocs.data
}
