'use strict'

var temp = require('./kelvin')

temp['romer'] = {
	base: 'kelvin',
	factor: 1 / 0.525,
	zero: -135.90375
}

module.exports = temp
