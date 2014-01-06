'use strict'

var speed = require('./meter-per-second')

speed['meter-per-minute'] = {
	base: 'meter-per-second',
	factor: 1 / 60
}

module.exports = speed
