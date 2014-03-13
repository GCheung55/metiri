'use strict'

var api = require('../api/time')

var unit = 'syderic-month'

require('../definition/time/syderic-month')

api.augment(unit)
api.augment(unit, 'syderic.month')

module.exports = api[unit]
