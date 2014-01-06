'use strict'

var length = require('./centimeter')

length['cubit'] = {
	base: 'centimeter',
	factor: 1 / 0.021872266
}

module.exports = length
