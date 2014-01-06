'use strict'

var length = require('./centimeter')

length['finger'] = {
	base: 'centimeter',
	factor: 1 / 0.44994376
}

module.exports = length
