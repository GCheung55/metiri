'use strict'

var length = require('./centimeter')

length['digit'] = {
	base: 'centimeter',
	factor: 1 / 0.50075113
}

module.exports = length
