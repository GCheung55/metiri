'use strict'

var length = require('./centimeter')

length['decimeter'] = {
	base: 'centimeter',
	factor: 10
}

module.exports = length
