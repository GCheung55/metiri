'use strict'

var speed = require('./meter-per-second')

speed['kilometer-per-second'] = {
	base: 'meter-per-second',
	factor: 1000
}

module.exports = speed
