'use strict'

var length = require('./centimeter')

length['mile'] = {
	base: 'centimeter',
	factor: 1 / 0.0000062137119
}

module.exports = length
