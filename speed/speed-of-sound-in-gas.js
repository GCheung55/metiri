'use strict'

var api = require('../api/speed')

var unit = 'speed-of-sound-in-gas'

var def = require('../definition/speed/speed-of-sound-in-gas')

api.augment(unit, def)

module.exports = api[unit]
