'use strict'

var temp = require('../_temperature')

var undef

temp.set('kelvin', undef, undef, undef, function(value) {
	return value < 0 ? new Error('Kelvin value can not be less than 0') : true
})

module.exports = temp