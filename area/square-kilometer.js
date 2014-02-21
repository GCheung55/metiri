'use strict'

var api = require('../api/area')

var unit = 'square-kilometer'

require('../definition/area/square-kilometer')

api.augment(unit)
api.augment(unit, 'square.kilometer')

module.exports = api[unit]
