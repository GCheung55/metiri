'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/speed-of-sound-in-gas')

var unit = 'speed-of-sound-in-gas'

api.augment(unit, def)

module.exports = api.get(unit)
