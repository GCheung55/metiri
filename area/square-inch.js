'use strict'

var api = require('../api/area')

var unit = 'square-inch'

var def = require('../definition/area/square-inch')

api.augment(unit, def)
api.augment(unit, 'square.inch')

module.exports = api[unit]
