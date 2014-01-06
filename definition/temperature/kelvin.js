'use strict'

var temp = require('../temperature')

temp['kelvin'] = {
	base: null,
	validator: function(value) {
		return value < 0 ? new Error('Kelvin value can not be less than 0') : true
	}
}

module.exports  = temp
