<!--
  - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<NcSettingsSection
		:name="t('files_downloadlimit', 'Download limit')"
		:description="t('files_downloadlimit', 'Configure the default download limit for external shares.')">
		<NcCheckboxRadioSwitch
			v-model="enableDefaultLimit"
			:loading="showLoading"
			type="switch">
			{{ t('files_downloadlimit', 'Default download limit for external shares') }}
		</NcCheckboxRadioSwitch>

		<NcTextField
			v-show="enableDefaultLimit"
			v-model="limit"
			class="settings__field"
			:disabled="!enableDefaultLimit || showLoading"
			:label="t('files_downloadlimit', 'Set default download limit')"
			type="number"
			min="1"
			:helper-text="helperText"
			:error="Boolean(helperText)"
			:success="showSuccess" />
		<div v-show="!enableDefaultLimit" class="settings__placeholder" />
	</NcSettingsSection>
</template>

<script lang="ts">
import { loadState } from '@nextcloud/initial-state'
import { translate as t } from '@nextcloud/l10n'
import { defineComponent } from 'vue'
import NcCheckboxRadioSwitch from '@nextcloud/vue/components/NcCheckboxRadioSwitch'
import NcSettingsSection from '@nextcloud/vue/components/NcSettingsSection'
import NcTextField from '@nextcloud/vue/components/NcTextField'
import { removeDefaultLimit, setDefaultLimit } from '../services/AdminService.ts'

const defaultDownloadLimit = loadState<number>('files_downloadlimit', 'default-download-limit', -1)

export default defineComponent({
	name: 'AdminSettings',

	components: {
		NcCheckboxRadioSwitch,
		NcSettingsSection,
		NcTextField,
	},

	data() {
		return {
			limit: Math.max(defaultDownloadLimit, 1),
			enableDefaultLimit: defaultDownloadLimit !== -1,
			showLoading: false,
			showSuccess: false,
		}
	},

	computed: {
		helperText() {
			if (typeof this.limit === 'number' && this.limit <= 0) {
				return t('files_downloadlimit', 'The minimum limit is 1')
			}
			return ''
		},
	},

	watch: {
		async limit(limit: number) {
			if (await setDefaultLimit(limit)) {
				this.showSuccess = true
				window.setTimeout(() => {
					this.showSuccess = false
				}, 1000)
			}
		},

		async enableDefaultLimit(enabled: boolean, oldValue: boolean) {
			this.showLoading = true
			let success: boolean
			if (enabled) {
				success = await setDefaultLimit(1)
			} else {
				success = await removeDefaultLimit()
			}

			if (!success) {
				this.enableDefaultLimit = oldValue
			}
			this.showLoading = false
		},
	},

	methods: {
		t,
	},
})
</script>

<style lang="scss" scoped>
.settings {
	&__field {
		max-width: 500px;
		margin-top: calc(3 * var(--default-grid-baseline)) !important;
	}

	&__placeholder {
		// ensure content does not jump when enable / disable the input
		height: calc(var(--default-clickable-area) + 3 * var(--default-grid-baseline));
	}
}
</style>
