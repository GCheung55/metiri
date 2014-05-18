'use strict'

var api = require('../api/time')

var unit = 'planck-time'

var def = require('../definition/time/planck-time')

api.augment(unit, def)
api.augment(unit, 'planck.time')

module.exports = api[unit]
