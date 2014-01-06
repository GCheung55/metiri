'use strict'

var speed = require('./meter-per-second')

speed['kilometer-per-hour'] = {
	base: 'meter-per-second',
	factor: 1 / 3.6
}

module.exports = speed
