'use strict'

var api = require('../api/volume')

var unit = 'liquid-gallon'

var def = require('../definition/volume/liquid-gallon')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
