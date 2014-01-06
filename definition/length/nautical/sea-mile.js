'use strict'

var length = require('../centimeter')

length['sea-mile'] = {
	base: 'centimeter',
	factor: 1 / 0.000005399568
}

module.exports = length
