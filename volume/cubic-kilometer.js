'use strict'

var api = require('../api/volume')

var unit = 'cubic-kilometer'

var def = require('../definition/volume/cubic-kilometer')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
