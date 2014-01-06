'use strict'

var length = require('./centimeter')

length['angstrom'] = {
	base: 'centimeter',
	factor: 1 / 100000000
}

module.exports = length
