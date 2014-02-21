'use strict'

var api = require('./pascal')

var unit = 'long-ton-per-square-inch'

require('../definition/pressure/long-ton-per-square-inch')

api.augment(unit)
api.augment(unit, 'long.ton.per.square.inch')

module.exports = api[unit]
