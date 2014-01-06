'use strict'

var speed = require('./meter-per-second')

speed['mile-per-hour'] = {
	base: 'meter-per-second',
	factor: 1 / 2.2369363
}

module.exports = speed
