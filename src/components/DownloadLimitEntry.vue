<!--
  - @copyright 2024 Christopher Ng <chrng8@gmail.com>
  -
  - @author Christopher Ng <chrng8@gmail.com>
  -
  - @license AGPL-3.0-or-later
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
-->

<template>
	<Fragment>
		<NcCheckboxRadioSwitch :checked.sync="limitEnabled"
			:loading="loading"
			:disabled="hasError">
			{{ t('files_downloadlimit', 'Limit downloads') }}
		</NcCheckboxRadioSwitch>
		<template v-if="!loading && !hasError">
			<NcNoteCard v-show="limitEnabled && showRemainingDownloadsNote"
				class="action__count-note"
				type="info">
				{{ n('files_downloadlimit', '1 remaining download allowed', '{count} remaining downloads allowed', remainingCount, { count: remainingCount }) }}
			</NcNoteCard>
			<NcTextField v-show="limitEnabled"
				:label="t('files_downloadlimit', 'Set download limit')"
				type="number"
				min="1"
				:value="limit"
				:helper-text="helperText"
				:error="Boolean(helperText)"
				@update:value="handleUpdateLimit" />
			<NcNoteCard v-show="limitEnabled && showResetNote"
				class="action__reset-note"
				type="warning">
				{{ t('files_downloadlimit', 'Setting a new limit will reset the download count') }}
			</NcNoteCard>
		</template>
	</Fragment>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Fragment } from 'vue-frag'
import { loadState } from '@nextcloud/initial-state'
import { showError } from '@nextcloud/dialogs'

import NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'
import NcNoteCard from '@nextcloud/vue/dist/Components/NcNoteCard.js'
import NcTextField from '@nextcloud/vue/dist/Components/NcTextField.js'

import {
	getDownloadLimit,
	setDownloadLimit,
	deleteDownloadLimit,
} from '../services/DownloadLimitService.ts'
import { logger } from '../logger.ts'

const defaultDownloadLimit = loadState<number>('files_downloadlimit', 'default-download-limit', -1)
// If a default is not set (-1) then the input should be empty
const limit: '' | number = defaultDownloadLimit === -1 ? '' : defaultDownloadLimit

export default defineComponent({
	name: 'DownloadLimitEntry',

	components: {
		Fragment,
		NcCheckboxRadioSwitch,
		NcNoteCard,
		NcTextField,
	},

	props: {
		share: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			limitEnabled: false,
			initialLimit: null,
			limit,
			count: null,
			loading: false,
			hasError: false,
		}
	},

	computed: {
		remainingCount() {
			return this.initialLimit - this.count
		},

		helperText() {
			if (this.limit > 0) {
				return ''
			}
			return t('files_downloadlimit', 'The minimum limit is 1')
		},

		isNewShare() {
			return this.share.id === null || this.share.id === undefined
		},

		showRemainingDownloadsNote() {
			return typeof this.count === 'number'
		},

		showResetNote() {
			return !this.isNewShare
				&& Boolean(this.initialLimit)
				&& typeof this.limit === 'number'
				&& this.limit !== this.initialLimit
		},
	},

	async created() {
		logger.debug('Loading download limit', { share: this.share })
		this.loading = true
		try {
			const { limit, count } = await getDownloadLimit(this.share.token)
			if (typeof limit === 'number' && typeof count === 'number') {
				this.limitEnabled = Boolean(limit)
				this.initialLimit = limit
				this.limit = limit
				this.count = count
			}
		} catch (error) {
			this.hasError = true
			logger.error('Failed to load download limit', { error, share: this.share })
		}
		this.loading = false
	},

	methods: {
		handleUpdateLimit(limit: string) {
			this.limit = Number(limit) // emitted <input> value is string so we parse it to number
		},

		async onSave() {
			const isValid = typeof this.limit === 'number' && this.limit > 0
			if (!isValid) {
				return
			}

			if (this.isNewShare || this.limit !== this.initialLimit) {
				try {
					await setDownloadLimit(this.share.token, this.limit)
				} catch (error) {
					showError(t('files_downloadlimit', 'Failed to set download limit'))
				}
				return
			}

			if (!this.limitEnabled && this.initialLimit) {
				try {
					await deleteDownloadLimit(this.share.token)
				} catch (error) {
					showError(t('files_downloadlimit', 'Failed to remove download limit'))
				}
			}
		},
	},
})
</script>

<style lang="scss" scoped>
.action {
	&__count-note {
		margin-top: 4px !important;
	}

	&__reset-note {
		margin-bottom: 8px !important;
	}
}
</style>
