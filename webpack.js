const path = require('path')
const webpackConfig = require('@nextcloud/webpack-vue-config')

webpackConfig.entry = {
	public: path.resolve(path.join('src', 'public.ts'))
}

module.exports = webpackConfig
