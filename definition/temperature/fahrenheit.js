'use strict'

var temp = require('./kelvin')

temp['fahrenheit'] = {
	base: 'kelvin',
	factor: 5/9,
	zero: -459.67
}

module.exports = temp
