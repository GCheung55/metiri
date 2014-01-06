'use strict'

var length = require('./centimeter')

length['mil'] = {
	base: 'centimeter',
	factor: 1 / 393.70079
}

module.exports = length
