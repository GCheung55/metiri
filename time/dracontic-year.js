'use strict'

var api = require('../api/time')
var def = require('../definition/time/dracontic-year')

var unit = 'dracontic-year'

api.augment(unit, def)

module.exports = api.get(unit)
