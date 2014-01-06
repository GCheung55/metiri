'use strict'

var speed = require('./meter-per-second')

speed['second-per-kilometer'] = {
	base: 'meter-per-second',
	factor: 1 / 0.001
}

module.exports = speed
