'use strict'

var api = require('../api/time')

var unit = 'planck-time'

require('../definition/time/planck-time')

api.augment(unit)
api.augment(unit, 'planck.time')

module.exports = api[unit]
