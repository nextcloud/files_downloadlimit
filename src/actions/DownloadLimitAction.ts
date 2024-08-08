/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { getCurrentUser } from '@nextcloud/auth'
import { ShareType } from '@nextcloud/sharing'

import DownloadLimitEntry from '../components/DownloadLimitEntry.vue'

interface ActionData {
	share: any, // eslint-disable-line @typescript-eslint/no-explicit-any
	fileInfo: any, // eslint-disable-line @typescript-eslint/no-explicit-any
	[key: string]: unknown,
}

export class DownloadLimitAction {

	get id() {
		return 'files_downloadlimit'
	}

	get shareType() {
		return [
			ShareType.Link,
			ShareType.Email,
		]
	}

	data({ share, fileInfo }: ActionData) {
		// Only works for files and existing shares
		if (typeof share.token !== 'string' || fileInfo.type !== 'file' || share.owner !== getCurrentUser()?.uid) {
			return {}
		}

		return {
			is: DownloadLimitEntry,
			share,
		}
	}

	get advanced() {
		return true
	}

	get handlers() {
		return {}
	}

}
