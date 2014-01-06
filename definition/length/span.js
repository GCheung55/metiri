'use strict'

var length = require('./centimeter')

length['span'] = {
	base: 'centimeter',
	factor: 1 / 0.043744532
}

module.exports = length
