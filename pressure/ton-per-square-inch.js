'use strict'

var api = require('../api/pressure')

var unit = 'ton-per-square-inch'

var def = require('../definition/pressure/ton-per-square-inch')

api.augment(unit, def)
api.augment(unit, 'ton.per.square.inch')

module.exports = api[unit]
