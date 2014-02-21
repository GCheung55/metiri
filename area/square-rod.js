'use strict'

var api = require('../api/area')

var unit = 'square-rod'

require('../definition/area/square-rod')

api.augment(unit)
api.augment(unit, 'square.rod')

module.exports = api[unit]
