'use strict'

var api = require('../api/time')
var def = require('../definition/time/dracontic-month')

var unit = 'dracontic-month'

api.augment(unit, def)

module.exports = api.get(unit)
