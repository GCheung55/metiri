'use strict'

var api = require('../api/time')

var unit = 'anomalistic-month'

var def = require('../definition/time/anomalistic-month')

api.augment(unit, def)
api.augment(unit, 'anomalistic.month')

module.exports = api[unit]
