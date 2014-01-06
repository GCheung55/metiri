'use strict'

var temp = require('./kelvin')

temp['reaumur'] = {
	base: 'kelvin',
	factor: 1 / 0.8,
	zero: -218.52
}

module.exports = temp
