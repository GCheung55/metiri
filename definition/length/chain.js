'use strict'

var length = require('./centimeter')

length['chain'] = {
	base: 'centimeter',
	factor: 1 / 0.00049709695
}

module.exports = length
