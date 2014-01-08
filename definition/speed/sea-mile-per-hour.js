'use strict'

var speed = require('./meter-per-second')

// alias: ['nmile/hr'],
speed.set('sea-mile-per-hour', 'meter-per-second', 1 / 1.9438445)

module.exports = speed
