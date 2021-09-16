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
import { loadState } from '@nextcloud/initial-state'
import { translatePlural as n } from '@nextcloud/l10n'

const { limit, downloads } = loadState(appName, 'download_limit', { limit: -1, downloads: 0 })
console.debug('[DEBUG]', appName, { limit, downloads })

window.addEventListener('DOMContentLoaded', function() {
	if (limit > 0) {
		const count = limit - downloads
		const container = document.getElementById('header-primary-action')
		const span = document.createElement('span')

		span.style = 'color: var(--color-primary-text); padding: 0 10px;'
		span.innerText = n('files_downloadlimit', '1 remaining download allowed', '{count} remaining downloads allowed', count, { count })

		container.prepend(span)
	}
})
