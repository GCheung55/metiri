'use strict'

var api = require('../api/time')

var unit = 'syderic-year'

require('../definition/time/syderic-year')

api.augment(unit)
api.augment(unit, 'syderic.year')

module.exports = api[unit]
