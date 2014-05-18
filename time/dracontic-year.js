'use strict'

var api = require('../api/time')

var unit = 'dracontic-year'

var def = require('../definition/time/dracontic-year')

api.augment(unit, def)

module.exports = api[unit]
