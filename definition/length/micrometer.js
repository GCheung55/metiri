'use strict'

var length = require('./centimeter')

length['micrometer'] = {
	base: 'centimeter',
	factor: 1 / 10000
}

module.exports = length
