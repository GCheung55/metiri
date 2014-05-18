'use strict'

var api = require('../api/time')

var unit = 'dracontic-year'

var def = require('../definition/time/dracontic-year')

api.augment(unit, def)
api.augment(unit, 'dracontic.year')

module.exports = api[unit]
