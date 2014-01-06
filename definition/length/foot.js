'use strict'

var length = require('./centimeter')

length['foot'] = {
	base: 'centimeter',
	factor: 1 / 0.032808399
}

module.exports = length
