'use strict'

var api = require('../api/pressure')

var unit = 'pound-per-square-inch'

var def = require('../definition/pressure/pound-per-square-inch')

api.augment(unit, def)
api.augment(unit, 'pound.per.square.inch')

module.exports = api[unit]
