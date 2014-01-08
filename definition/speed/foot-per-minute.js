'use strict'

var speed = require('./meter-per-second')

speed.set('foot-per-minute', 'meter-per-second', 1 / 196.85039)

module.exports = speed
