'use strict'

var api = require('../api/area')

var unit = 'square-inch'

require('../definition/area/square-inch')

api.augment(unit)
api.augment(unit, 'square.inch')

module.exports = api[unit]
