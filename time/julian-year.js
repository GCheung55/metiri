'use strict'

var api = require('../api/time')

var unit = 'julian-year'

var def = require('../definition/time/julian-year')

api.augment(unit, def)

module.exports = api[unit]
