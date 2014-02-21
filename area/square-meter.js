'use strict'

var api = require('../api/area')

var unit = 'square-meter'

require('../definition/area/square-meter')

api.augment(unit)
api.augment(unit, 'square.meter')

module.exports = api[unit]
