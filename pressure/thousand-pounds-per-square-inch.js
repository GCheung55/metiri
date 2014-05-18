'use strict'

var api = require('../api/pressure')

var unit = 'thousand-pounds-per-square-inch'

var def = require('../definition/pressure/thousand-pounds-per-square-inch')

api.augment(unit, def)
api.augment(unit, 'thousand.pounds.per.square.inch')

module.exports = api[unit]
