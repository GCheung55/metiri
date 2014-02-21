'use strict'

var api = require('../api/speed')

var unit = 'speed-of-sound-in-gas'

require('../definition/speed/speed-of-sound-in-gas')

api.augment(unit)
api.augment(unit, 'speed.of.sound.in.gas')

module.exports = api[unit]
