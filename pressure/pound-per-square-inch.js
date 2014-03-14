'use strict'

var api = require('../api/pressure')

var unit = 'pound-per-square-inch'

require('../definition/pressure/pound-per-square-inch')

api.augment(unit)
api.augment(unit, 'pound.per.square.inch')

module.exports = api[unit]
