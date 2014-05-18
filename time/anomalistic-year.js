'use strict'

var api = require('../api/time')

var unit = 'anomalistic-year'

var def = require('../definition/time/anomalistic-year')

api.augment(unit, def)

module.exports = api[unit]
