'use strict'

var api = require('../api/pressure')

var unit = 'newton-per-square-meter'

var def = require('../definition/pressure/newton-per-square-meter')

api.augment(unit, def)
api.augment(unit, 'newton.per.square.meter')

module.exports = api[unit]
