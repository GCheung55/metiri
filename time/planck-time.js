'use strict'

var api = require('../api/time')
var def = require('../definition/time/planck-time')

var unit = 'planck-time'

api.augment(unit, def)

module.exports = api.get(unit)
