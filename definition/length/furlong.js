'use strict'

var length = require('./centimeter')

length['furlong'] = {
	base: 'centimeter',
	factor: 1 / 0.000049709695
}

module.exports = length
