'use strict'

var length = require('./centimeter')

length['survey-foot'] = {
	base: 'centimeter',
	factor: 1 / 0.032808333
}

module.exports = length
