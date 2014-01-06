'use strict'

var length = require('./centimeter')

length['nanometer'] = {
	base: 'centimeter',
	factor: 1 / 10000000
}

module.exports = length
