'use strict'

var length = require('./centimeter')

length['fathom'] = {
	base: 'centimeter',
	factor: 1 / 0.0054680665
}

module.exports = length
