'use strict'

var api = require('../api/time')

var unit = 'calendar-month'

require('../definition/time/calendar-month')

api.augment(unit)
api.augment(unit, 'month')
api.augment(unit, 'calendar.month')

module.exports = api[unit]
