/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
module.exports = {
	globals: {
		appName: true,
	},
	ignorePatterns: [
		'node_modules/',
		'js/',
		'lib/'
	],
	extends: [
		'@nextcloud/eslint-config/typescript'
	],
	rules: {
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': 'error',
		'no-unused-expressions': 0,
	},
	overrides: [
		{
			files: [
				'./*.config.*',
				'**/*.spec.*',
				'**/*.test.*'
			],
			rules: {
				'n/no-unpublished-import': [
					'off'
				]
			}
		},
		{
			files: [
				'**/*.vue'
			],
			rules: {
				'n/no-missing-import': 'off'
			}
		}
	]
}
