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
import ActionInput from '@nextcloud/vue/dist/Components/ActionInput'
import debounce from 'debounce'

import { setDownloadLimit } from '../service/DownloadLimitService'

export default class DownloadLimitAction {

	// internal state
	_store

	constructor(store) {
		this._store = store
	}

	get id() {
		return appName
	}

	get shareType() {
		return [OC.Share.SHARE_TYPE_LINK, OC.Share.SHARE_TYPE_EMAIL]
	}

	data({ share, fileInfo }) {
		// Only works for files and existing shares
		if (typeof share.token !== 'string' || fileInfo.type !== 'file') {
			return {}
		}

		return {
			icon: 'icon-download',
			is: this._store.enabled ? ActionInput : null,
			text: t('files_downloadlimit', 'Download limit'),
			title: t('files_downloadlimit', 'Download count: {count}', this._store),
			value: this._store.limit,
		}
	}

	get handlers() {
		return {
			'update:value': debounce((limit) => {
				setDownloadLimit(this._store.token, limit)
			}, 300),
		}
	}

}
