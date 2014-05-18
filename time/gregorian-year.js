'use strict'

var api = require('../api/time')

var unit = 'gregorian-year'

var def = require('../definition/time/gregorian-year')

api.augment(unit, def)
api.augment(unit, 'year')

module.exports = api[unit]
