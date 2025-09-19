<!--
  - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div :class="$style.action__wrapper">
		<NcCheckboxRadioSwitch
			:checked.sync="limitEnabled"
			:loading="loading"
			:disabled="hasError">
			{{ t('files_downloadlimit', 'Limit downloads') }}
		</NcCheckboxRadioSwitch>

		<template v-if="!loading && !hasError">
			<NcNoteCard
				v-show="limitEnabled && showRemainingDownloadsNote"
				:class="$style.action__countNote"
				type="info">
				{{ n('files_downloadlimit', '1 remaining download allowed', '{count} remaining downloads allowed', remainingCount, { count: remainingCount }) }}
			</NcNoteCard>
			<NcTextField
				v-show="limitEnabled"
				:label="t('files_downloadlimit', 'Set download limit')"
				type="number"
				min="1"
				:value="limit"
				:helper-text="helperText"
				:error="Boolean(helperText)"
				@update:value="handleUpdateLimit" />
			<NcNoteCard
				v-show="limitEnabled && showResetNote"
				:class="$style.action__resetNote"
				type="warning">
				{{ t('files_downloadlimit', 'Setting a new limit will reset the download count') }}
			</NcNoteCard>
		</template>
	</div>
</template>

<script lang="ts">
import { showError } from '@nextcloud/dialogs'
import { loadState } from '@nextcloud/initial-state'
import { n, t } from '@nextcloud/l10n'
import { defineComponent } from 'vue'
import NcCheckboxRadioSwitch from '@nextcloud/vue/components/NcCheckboxRadioSwitch'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcTextField from '@nextcloud/vue/components/NcTextField'
import { logger } from '../logger.ts'
import {
	deleteDownloadLimit,
	getDownloadLimit,
	setDownloadLimit,
} from '../services/DownloadLimitService.ts'

const defaultDownloadLimit = loadState<number>('files_downloadlimit', 'default-download-limit', -1)
// If a default is not set (-1) then the input should be empty
const limit: '' | number = defaultDownloadLimit === -1 ? '' : defaultDownloadLimit

export default defineComponent({
	name: 'DownloadLimitEntry',

	components: {
		NcCheckboxRadioSwitch,
		NcNoteCard,
		NcTextField,
	},

	props: {
		share: {
			type: Object,
			required: true,
		},

		onSave: {
			type: Function,
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

	watch: {
		share: {
			deep: true,
			immediate: true,
			async handler(share, oldShare) {
				if (!share?.id || oldShare?.id) {
					logger.debug('Skip undefined share')
					return
				}

				this.onSave(this.save)

				if (share.id === oldShare?.id && this.limit) {
					logger.debug('Same share given, skip loading download limit', { share, oldShare })
					return
				}

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
		},
	},

	methods: {
		n,
		t,

		handleUpdateLimit(limit: string) {
			this.limit = Number(limit) // emitted <input> value is string so we parse it to number
		},

		async save() {
			if (typeof this.limit !== 'number' || this.limit <= 0) {
				logger.debug('Skip saving invalid limit', { limit: this.limit })
				return
			}

			if (this.isNewShare || this.limit !== this.initialLimit) {
				try {
					await setDownloadLimit(this.share.token, this.limit)
				} catch (error) {
					logger.error('Failed to set the download limit', { error, limit: this.limit, share: this.share })
					showError(t('files_downloadlimit', 'Failed to set download limit'))
				}
				return
			}

			if (!this.limitEnabled && this.initialLimit) {
				try {
					await deleteDownloadLimit(this.share.token)
				} catch (error) {
					logger.error('Failed to remove the download limit', { error, share: this.share })
					showError(t('files_downloadlimit', 'Failed to remove download limit'))
				}
			}
		},
	},
})
</script>

<style module lang="scss">
.action {
	&__wrapper {
		width: 100%;
	}

	&__countNote {
		margin-top: 4px !important;
	}

	&__resetNote {
		margin-bottom: 8px !important;
	}
}
</style>
