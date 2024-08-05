/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { loadState } from '@nextcloud/initial-state'
import { translate as t, translatePlural as n } from '@nextcloud/l10n'

import '../css/public.css'

import { logger } from './logger.ts'

const { limit, downloads } = loadState('files_downloadlimit', 'download_limit', { limit: -1, downloads: 0 })
logger.debug('Download limit', { limit, downloads })

// Global variables init on page load
let count = limit - downloads
let clicks = 0

/**
 * Update the span counter message
 *
 * @param span html span element to update
 * @param count number of remaining downloads allowed
 */
const updateCounter = (span: HTMLSpanElement, count: number) => {
	if (count === 0) {
		span.innerText = t('files_downloadlimit', 'You have reached the maximum amount of downloads allowed')
	} else {
		span.innerText = n('files_downloadlimit', '1 remaining download allowed', '{count} remaining downloads allowed', count, { count })
	}
}

window.addEventListener('DOMContentLoaded', () => {
	if (limit < 1) {
		return
	}

	const container = document.getElementById('header-primary-action')
	if (!container) {
		return
	}

	const span = document.createElement('span')
	span.setAttribute('style', 'color: var(--color-primary-text); padding: 0 10px;')
	updateCounter(span, count)
	container.prepend(span)

	const publicContent = document.querySelector<HTMLElement>('#files-public-content')
	if (!publicContent) {
		return
	}

	// Preventing mouse interaction
	publicContent.oncontextmenu = (event) => {
		event.preventDefault()
		event.stopPropagation()
		return false
	}

	// Adding double-download warning
	const downloadButtons = document.querySelectorAll<HTMLAnchorElement>('a[href*="/download/"]') || []
	new Set(downloadButtons).forEach(button => {
		button.addEventListener('click', (event) => {
			// Warn about download limits
			if (clicks > 0) {
				if (!confirm(t('files_downloadlimit', 'This share has a limited number of downloads. Are you sure you want to trigger a new download?'))) {
					event.preventDefault()
					event.stopPropagation()
					return
				}
			}

			// Handle counts changes
			count--
			clicks++
			updateCounter(span, count)

			// Remove the buttons if share is now expired
			if (count === 0) {
				[...downloadButtons].forEach(button => button.remove())
			}
		})
	})
})
