'use strict'

var temp = require('./kelvin')

temp['newton'] = {
	base: 'kelvin',
	factor: 1 / 0.33,
	zero: -90.1395
}

module.exports = temp
