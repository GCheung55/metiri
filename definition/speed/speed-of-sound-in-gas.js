'use strict'

var speed = require('./meter-per-second')

speed['speed-of-light-in-vacuum'] = {
	base: 'meter-per-second',
	factor: 1 / 0.0029411765
}

module.exports = speed
