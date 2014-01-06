'use strict'

var speed = require('./meter-per-second')

speed['second-per-100-meters'] = {
	base: 'meter-per-second',
	factor: 1 / 0.01
}

module.exports = speed
