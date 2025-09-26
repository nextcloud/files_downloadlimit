/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { INode } from '@nextcloud/files'
import type { ILinkShare, IShare } from '@nextcloud/sharing'
import type { ISidebarAction } from '@nextcloud/sharing/ui'

import { FileType } from '@nextcloud/files'
import { ShareType } from '@nextcloud/sharing'
import { registerSidebarAction } from '@nextcloud/sharing/ui'
import { defineCustomElement } from 'vue'
import DownloadLimitEntry from './components/DownloadLimitEntry.vue'

const CUSTOM_ELEMENT_ID = 'oca_files_downloadlimit-sharing_action'

const sharingAction: ISidebarAction = {
	id: 'files_downloadlimit',

	element: CUSTOM_ELEMENT_ID,

	order: 20,

	enabled(share: IShare, node: INode) {
		if (share.type !== ShareType.Email && share.type !== ShareType.Link) {
			// only implemented for link and email shares
			return false
		}

		if (!(share as ILinkShare).token) {
			return false
		}

		return node.type === FileType.File
	},
}

const DownloadLimitEntryElement = defineCustomElement(DownloadLimitEntry, { shadowRoot: false })
window.customElements.define(CUSTOM_ELEMENT_ID, DownloadLimitEntryElement)
registerSidebarAction(sharingAction)
