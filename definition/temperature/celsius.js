'use strict'

var temp = require('./kelvin')

temp['celsius'] = {
	base: 'kelvin',
	factor: 1 / 1,
	zero: -273.15
}

module.exports = temp
