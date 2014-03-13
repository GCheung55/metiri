'use strict'

var api = require('../api/time')

var unit = 'julian-year'

require('../definition/time/julian-year')

api.augment(unit)
api.augment(unit, 'julian.year')

module.exports = api[unit]
