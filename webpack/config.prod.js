const { merge } = require('webpack-merge')
const base = require('./config.common.ts')

module.exports = merge(base, {
  mode: 'production',
})