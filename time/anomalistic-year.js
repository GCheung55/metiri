'use strict'

var api = require('../api/time')

var unit = 'anomalistic-year'

require('../definition/time/anomalistic-year')

api.augment(unit)
api.augment(unit, 'anomalistic.year')

module.exports = api[unit]
