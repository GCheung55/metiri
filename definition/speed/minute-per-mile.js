'use strict'

var speed = require('./meter-per-second')

speed['minute-per-mile'] = {
	base: 'meter-per-second',
	factor: 1 / 0.037282272
}

module.exports = speed
