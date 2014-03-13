'use strict'

var api = require('../api/time')

var unit = 'anomalistic-month'

require('../definition/time/anomalistic-month')

api.augment(unit)
api.augment(unit, 'anomalistic.month')

module.exports = api[unit]
