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

		<NcCheckboxRadioSwitch
			v-show="enableDefaultLimit"
			:modelValue="enforceLimit"
			:loading="showEnforceLoading"
			:disabled="showLoading"
			type="switch"
			@update:modelValue="onUpdateEnforceLimit">
			{{ t('files_downloadlimit', 'Enforce the default download limit as maximum') }}
		</NcCheckboxRadioSwitch>

		<NcTextField
			v-show="enableDefaultLimit"
			v-model="limit"
			class="settings__field"
			:disabled="!enableDefaultLimit || showLoading"
			:label="t('files_downloadlimit', 'Set default download limit')"
			type="number"
			min="1"
			:helperText="helperText"
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
import { removeDefaultLimit, setDefaultLimit, setLimitEnforced } from '../services/AdminService.ts'

const defaultDownloadLimit = loadState<number>('files_downloadlimit', 'default-download-limit', -1)
const enforceDownloadLimit = loadState<boolean>('files_downloadlimit', 'enforce-download-limit', false)

export default defineComponent({
	name: 'AdminSettings',

	components: {
		NcCheckboxRadioSwitch,
		NcSettingsSection,
		NcTextField,
	},

	data() {
		return {
			limit: Math.max(defaultDownloadLimit, 10),
			enableDefaultLimit: defaultDownloadLimit !== -1,
			enforceLimit: enforceDownloadLimit,
			showLoading: false,
			showEnforceLoading: false,
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
				success = await setDefaultLimit(10)
			} else {
				success = await removeDefaultLimit()
			}

			if (!success) {
				this.enableDefaultLimit = oldValue
			} else if (!enabled) {
				// removing the default limit also removes its enforcement
				this.enforceLimit = false
			}
			this.showLoading = false
		},
	},

	methods: {
		t,

		async onUpdateEnforceLimit(enforced: boolean) {
			this.showEnforceLoading = true
			if (await setLimitEnforced(enforced)) {
				this.enforceLimit = enforced
			}
			this.showEnforceLoading = false
		},
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
		height: calc(2 * var(--default-clickable-area) + 3 * var(--default-grid-baseline));
	}
}
</style>
