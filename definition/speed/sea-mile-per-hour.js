'use strict'

var speed = require('./meter-per-second')

speed['sea-mile-per-hour'] = {
	base: 'meter-per-second',
	// alias: ['nmile/hr'],
	factor: 1 / 1.9438445
}

module.exports = speed
