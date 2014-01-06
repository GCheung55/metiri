'use strict'

var speed = require('./meter-per-second')

speed['knot'] = {
	base: 'meter-per-second',
	factor: 1 / 1.9438445
}

module.exports = speed
