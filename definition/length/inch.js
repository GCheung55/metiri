'use strict'

var length = require('./centimeter')

length['inch'] = {
	base: 'centimeter',
	factor: 1 / 0.39370079
}

module.exports = length
