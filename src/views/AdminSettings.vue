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
	<NcSettingsSection :name="t('files_downloadlimit', 'Download limit')"
		:description="t('files_downloadlimit', 'Configure the default download limit for external shares.')">
		<form @submit.prevent="handleSave">
			<NcTextField class="settings__field"
				:label="t('files_downloadlimit', 'Set default download limit')"
				type="number"
				min="1"
				:value="limit"
				:helper-text="helperText"
				:error="Boolean(helperText)"
				:success="showSuccess"
				:show-trailing-button="showTrailingButton"
				trailing-button-icon="arrowRight"
				@update:value="handleUpdateLimit"
				@trailing-button-click="handleSave" />
		</form>
	</NcSettingsSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { loadState } from '@nextcloud/initial-state'
import { translate as t } from '@nextcloud/l10n'
import { showError } from '@nextcloud/dialogs'

import NcSettingsSection from '@nextcloud/vue/dist/Components/NcSettingsSection.js'
import NcTextField from '@nextcloud/vue/dist/Components/NcTextField.js'

import { setDefaultLimit } from '../services/AdminService.ts'

const defaultDownloadLimit = loadState<number>('files_downloadlimit', 'default-download-limit', -1)
// If a default is not set (-1) then the input should be empty
const limit: '' | number = defaultDownloadLimit === -1 ? '' : defaultDownloadLimit

export default defineComponent({
	name: 'AdminSettings',

	components: {
		NcSettingsSection,
		NcTextField,
	},

	data() {
		return {
			limit,
			savedLimit: limit,
			showSuccess: false,
		}
	},

	computed: {
		helperText() {
			if (typeof this.limit !== 'number') {
				return ''
			}
			if (this.limit > 0) {
				return ''
			}
			return t('files_downloadlimit', 'The minimum limit is 1')
		},

		showTrailingButton() {
			return typeof this.limit === 'number'
				&& this.limit > 0
				&& this.limit !== this.savedLimit
		},
	},

	methods: {
		t,

		handleUpdateLimit(limit: string) {
			this.limit = Number(limit) // emitted <input> value is string so we parse it to number
		},

		async handleSave() {
			const isValid = typeof this.limit === 'number' && this.limit > 0
			if (!isValid) {
				return
			}

			try {
				await setDefaultLimit(this.limit)
				this.savedLimit = this.limit
				this.showSuccess = true
				setTimeout(() => { this.showSuccess = false }, 3000)
			} catch (error) {
				showError(t('files_downloadlimit', 'Failed to set default download limit'))
			}
		},
	},
})
</script>

<style lang="scss" scoped>
.settings {
	&__field {
		max-width: 500px;
	}
}
</style>
