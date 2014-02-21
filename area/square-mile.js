'use strict'

var api = require('../api/area')

var unit = 'square-mile'

require('../definition/area/square-mile')

api.augment(unit)
api.augment(unit, 'square.mile')

module.exports = api[unit]
