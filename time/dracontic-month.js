'use strict'

var api = require('../api/time')

var unit = 'dracontic-month'

require('../definition/time/dracontic-month')

api.augment(unit)
api.augment(unit, 'dracontic.month')

module.exports = api[unit]
