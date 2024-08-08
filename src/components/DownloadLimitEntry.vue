<!--
  - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
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
import { showError } from '@nextcloud/dialogs'
import { loadState } from '@nextcloud/initial-state'
import { n, t } from '@nextcloud/l10n'
import { defineComponent } from 'vue'
import { Fragment } from 'vue-frag'

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
			initialLimit: null as number | null,
			limit,
			count: null as number | null,
			loading: false,
			hasError: false,
		}
	},

	computed: {
		remainingCount() {
			return (this.initialLimit ?? 0) - (this.count ?? 0)
		},

		helperText() {
			if (this.limit && this.limit > 0) {
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
		n,
		t,

		handleUpdateLimit(limit: string) {
			this.limit = Number(limit) // emitted <input> value is string so we parse it to number
		},

		async onSave() {
			if (typeof this.limit !== 'number' || this.limit <= 0) {
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
