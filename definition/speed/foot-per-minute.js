'use strict'

var speed = require('./meter-per-second')

speed['foot-per-minute'] = {
	base: 'meter-per-second',
	factor: 1 / 196.85039
}

module.exports = speed
