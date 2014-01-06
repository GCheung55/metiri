'use strict'

var length = require('./centimeter')

length['meter'] = {
	base: 'centimeter',
	factor: 100
}

module.exports = length
