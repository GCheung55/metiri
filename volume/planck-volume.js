'use strict'

var api = require('../api/volume')

var unit = 'planck-volume'

require('../definition/volume/planck-volume')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
