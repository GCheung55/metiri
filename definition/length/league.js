'use strict'

var length = require('./centimeter')

length['league'] = {
	base: 'centimeter',
	factor: 1 / 0.0000020712373
}

module.exports = length
