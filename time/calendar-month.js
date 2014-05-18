'use strict'

var api = require('../api/time')
var def = require('../definition/time/calendar-month')

var unit = 'calendar-month'

api.augment(unit, def)
api.augment(unit, 'month')

module.exports = api.get(unit)
