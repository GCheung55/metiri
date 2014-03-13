'use strict'

var api = require('../api/time')

var unit = 'tropic-year'

require('../definition/time/tropic-year')

api.augment(unit)
api.augment(unit, 'tropic.year')

module.exports = api[unit]
