/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import { createAppConfig } from '@nextcloud/vite-config'

export default createAppConfig(
	{
		main: 'src/main.ts',
		public: 'src/public.ts',
		admin: 'src/admin.ts',
	},
	{
		inlineCSS: false,
		thirdPartyLicense: false,
		extractLicenseInformation: {
			includeSourceMaps: true,
			overwriteLicenses: {
				'@nextcloud/axios': 'GPL-3.0-or-later',
			},
		},
	},
)
