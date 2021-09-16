/**
 * @copyright Copyright (c) 2021 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import axios from '@nextcloud/axios'
import { generateOcsUrl } from '@nextcloud/router'

export const getDownloadLimit = async function(token) {
	const response = await axios.get(generateOcsUrl(`/apps/${appName}/{token}/limit`, { token }))
	return response.data.ocs.data
}

export const setDownloadLimit = async function(token, limit) {
	const response = await axios.put(generateOcsUrl(`/apps/${appName}/{token}/limit`, { token }), {
		limit,
	})
	return response.data.ocs.data
}

export const deleteDownloadLimit = async function(token) {
	const response = await axios.delete(generateOcsUrl(`/apps/${appName}/{token}/limit`, { token }))
	return response.data.ocs.data
}
