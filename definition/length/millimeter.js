'use strict'

var length = require('./centimeter')

length['millimeter'] = {
	base: 'centimeter',
	factor: 1 / 10
}

module.exports = length
