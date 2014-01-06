'use strict'

var speed = require('./meter-per-second')

speed['minute-per-kilometer'] = {
	base: 'meter-per-second',
	factor: 1 / 0.06
}

module.exports = speed
