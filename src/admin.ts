/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Vue from 'vue'

import AdminSettings from './views/AdminSettings.vue'

const instance = new Vue({
	render: h => h(AdminSettings),
})
instance.$mount('#admin-download-limit')
