'use strict'

var temp = require('./kelvin')

temp['rankine'] = {
	base: 'kelvin',
	factor: 1 / 1.8
}

module.exports = temp
