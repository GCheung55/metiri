'use strict'

var api = require('../api/time')

var unit = 'gregorian-year'

require('../definition/time/gregorian-year')

api.augment(unit)
api.augment(unit, 'year')
api.augment(unit, 'gregorian.year')

module.exports = api[unit]
