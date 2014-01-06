'use strict'

var length = require('./centimeter')

length['yard'] = {
	base: 'centimeter',
	factor: 1 / 0.010936133
}

module.exports = length
