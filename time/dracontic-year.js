'use strict'

var api = require('../api/time')

var unit = 'dracontic-year'

require('../definition/time/dracontic-year')

api.augment(unit)
api.augment(unit, 'dracontic.year')

module.exports = api[unit]
