/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { DownloadLimitAction } from './actions/DownloadLimitAction.ts'

window.addEventListener('DOMContentLoaded', () => {
	// @ts-expect-error OCA is not public
	OCA.Sharing.ExternalShareActions.registerAction(new DownloadLimitAction())
})
