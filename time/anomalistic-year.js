'use strict'

var api = require('../api/time')

var unit = 'anomalistic-year'

var def = require('../definition/time/anomalistic-year')

api.augment(unit, def)
api.augment(unit, 'anomalistic.year')

module.exports = api[unit]
