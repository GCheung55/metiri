'use strict'

var api = require('../api/pressure')

var unit = 'long-ton-per-square-inch'

var def = require('../definition/pressure/long-ton-per-square-inch')

api.augment(unit, def)
api.augment(unit, 'long.ton.per.square.inch')

module.exports = api[unit]
