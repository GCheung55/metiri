'use strict'

var api = require('../api/speed')

var unit = 'speed-of-light-in-vacuum'

require('../definition/speed/speed-of-light-in-vacuum')

api.augment(unit)
api.augment(unit, 'speed.of.light.in.vacuum')

module.exports = api[unit]
