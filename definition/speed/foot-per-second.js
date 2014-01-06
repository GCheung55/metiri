'use strict'

var speed = require('./meter-per-second')

speed['foot-per-second'] = {
	base: 'meter-per-second',
	factor: 1 / 3.2808399
}

module.exports = speed
