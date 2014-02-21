'use strict'

var api = require('./pascal')

var unit = 'ton-per-square-inch'

require('../definition/pressure/ton-per-square-inch')

api.augment(unit)
api.augment(unit, 'ton.per.square.inch')

module.exports = api[unit]
