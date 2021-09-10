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

// Create dummy global store
export default class Store {

	_data = {
		enabled: false,
		limit: null,
		count: null,
		token: null,
	}

	get enabled() {
		return this._data.enabled
	}

	set enabled(enabled) {
		this._data.enabled = enabled
	}

	get limit() {
		return this._data.limit
	}

	set limit(limit) {
		this._data.limit = limit
	}

	get count() {
		return this._data.count
	}

	set count(count) {
		this._data.count = count
	}

	get token() {
		return this._data.token
	}

	set token(token) {
		this._data.token = token
	}

}
