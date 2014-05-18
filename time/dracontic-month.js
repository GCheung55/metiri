'use strict'

var api = require('../api/time')

var unit = 'dracontic-month'

var def = require('../definition/time/dracontic-month')

api.augment(unit, def)

module.exports = api[unit]
