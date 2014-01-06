'use strict'

var length = require('./centimeter')

length['line'] = {
	base: 'centimeter',
	factor: 1 / 4.7244094
}

module.exports = length
