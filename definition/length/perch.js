'use strict'

var length = require('./centimeter')

length['perch'] = {
	base: 'centimeter',
	factor: 1 / 0.0019883878
}

module.exports = length
