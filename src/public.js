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
import { translate as t, translatePlural as n } from '@nextcloud/l10n'

import '../css/public.css'

const { limit, downloads } = loadState(appName, 'download_limit', { limit: -1, downloads: 0 })
console.debug('[DEBUG]', appName, { limit, downloads })

let count = limit - downloads
let clicks = 0

const updateCounter = function(span) {
	if (count === 0) {
		span.innerText = t(appName, 'You have reached the maximum amount of downloads allowed')
	} else {
		span.innerText = n(appName, '1 remaining download allowed', '{count} remaining downloads allowed', count, { count })
	}
}

window.addEventListener('DOMContentLoaded', function() {
	if (limit > 0) {
		const container = document.getElementById('header-primary-action')
		const span = document.createElement('span')

		span.style = 'color: var(--color-primary-text); padding: 0 10px;'
		updateCounter(span, count)

		container.prepend(span)

		// Adding double-download warning
		const downloadButton = container.querySelector('a[href*="/download/"]')
		if (downloadButton) {
			downloadButton.addEventListener('click', (event) => {
				// Warn about download limits
				if (clicks > 0) {
					if (!confirm(t(appName, 'This share has a limited number of downloads. Are you sure you want to trigger a new download ?'))) {
						event.preventDefault()
						event.stopPropagation()
						return
					}
				}

				count--
				clicks++
				updateCounter(span, count)

				// Remove the button if share is now expired
				if (count === 0) {
					downloadButton.remove()
				}
			})
		}
	}
})
