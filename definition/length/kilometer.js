'use strict'

var length = require('./centimeter')

length['kilometer'] = {
	base: 'centimeter',
	factor: 100000
}

module.exports = length
