'use strict'

var speed = require('./meter-per-second')

speed.set('kilometer-per-second', 'meter-per-second', 1000)

module.exports = speed
