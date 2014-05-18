'use strict'

var api = require('../api/time')

var unit = 'calendar-month'

var def = require('../definition/time/calendar-month')

api.augment(unit, def)
api.augment(unit, 'month')

module.exports = api[unit]
