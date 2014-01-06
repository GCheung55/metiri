'use strict'

var speed = require('./meter-per-second')

speed['second-per-100-yards'] = {
	base: 'meter-per-second',
	factor: 1 / 0.010936133
}

module.exports = speed
