'use strict'

var api = require('../api/volume')

var unit = 'planck-volume'

var def = require('../definition/volume/planck-volume')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
