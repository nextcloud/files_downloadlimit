/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { translate as t } from '@nextcloud/l10n'
import ActionCheckbox from '@nextcloud/vue/dist/Components/ActionCheckbox'

import { deleteDownloadLimit, getDownloadLimit } from '../service/DownloadLimitService'
export default class LimitEnableAction {

	// internal state
	_store

	constructor(store) {
		this._store = store
	}

	get id() {
		return appName + '_enable'
	}

	get shareType() {
		return [OC.Share.SHARE_TYPE_LINK, OC.Share.SHARE_TYPE_EMAIL]
	}

	data({ share, fileInfo }) {
		// Only works for files and existing shares
		if (typeof share.token !== 'string' || fileInfo.type !== 'file') {
			return {}
		}

		getDownloadLimit(share.token).then(data => {
			// If token changed, let's update the checkbox state.
			if (this._store.token !== share.token) {
				this._store.enabled = data.limit !== null
			}

			this._store.limit = data.limit
			this._store.count = data.count
			this._store.token = share.token
		})

		return {
			is: ActionCheckbox,
			text: t('files_downloadlimit', 'Limit downloads'),
			checked: this._store.enabled,
		}
	}

	get handlers() {
		// Using arrow methods to keep `this` context
		return {
			check: () => {
				this._store.enabled = true
			},
			uncheck: () => {
				this._store.enabled = false
				deleteDownloadLimit(this._store.token)
			},
		}
	}

}
