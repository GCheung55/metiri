'use strict'

var length = require('./centimeter')

length['link'] = {
	base: 'centimeter',
	factor: 1 / 0.049709695
}

module.exports = length
