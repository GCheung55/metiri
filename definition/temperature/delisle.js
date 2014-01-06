'use strict'

var temp = require('./kelvin')

temp['delisle'] = {
	base: 'kelvin',
	factor: 1 / -1.5,
	zero: +559.725
}

module.exports = temp
