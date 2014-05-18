'use strict'

var api = require('../api/time')

var unit = 'anomalistic-month'

var def = require('../definition/time/anomalistic-month')

api.augment(unit, def)

module.exports = api[unit]
