'use strict'

var length = require('./centimeter')

length['microinch'] = {
	base: 'centimeter',
	factor: 1 / 393700.79
}

module.exports = length
