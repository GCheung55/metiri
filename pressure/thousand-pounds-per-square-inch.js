'use strict'

var api = require('./pascal')

var unit = 'thousand-pounds-per-square-inch'

require('../definition/pressure/thousand-pounds-per-square-inch')

api.augment(unit)
api.augment(unit, 'thousand.pounds.per.square.inch')

module.exports = api[unit]
