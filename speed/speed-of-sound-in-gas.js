'use strict'

var api = require('../api/speed')

var unit = 'speed-of-sound-in-gas'

var def = require('../definition/speed/speed-of-sound-in-gas')

api.augment(unit, def)
api.augment(unit, 'speed.of.sound.in.gas')

module.exports = api[unit]
