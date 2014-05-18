'use strict'

var api = require('../api/time')

var unit = 'dracontic-month'

var def = require('../definition/time/dracontic-month')

api.augment(unit, def)
api.augment(unit, 'dracontic.month')

module.exports = api[unit]
