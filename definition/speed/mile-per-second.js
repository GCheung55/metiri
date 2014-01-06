'use strict'

var speed = require('./meter-per-second')

speed['mile-per-second'] = {
	base: 'meter-per-second',
	factor: 1 / 0.00062137119
}

module.exports = speed
