'use strict'

var api = require('../api/volume')

var unit = 'planck-volume'

var def = require('../definition/volume/planck-volume')

api.augment(unit, def)

module.exports = api[unit]
