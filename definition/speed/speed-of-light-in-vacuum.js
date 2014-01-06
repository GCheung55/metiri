'use strict'

var speed = require('./meter-per-second')

speed['speed-of-light-in-vacuum'] = {
	base: 'meter-per-second',
	factor: 1 / 3.335641e-9
}

module.exports = speed
