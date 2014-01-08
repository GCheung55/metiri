'use strict'

var speed = require('./meter-per-second')

speed.set('second-per-kilometer', 'meter-per-second', 1 / 0.001)

module.exports = speed
