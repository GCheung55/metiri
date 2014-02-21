'use strict'

var api = require('../api/area')

var unit = 'square-centimeter'

require('../definition/area/square-centimeter')

api.augment(unit)
api.augment(unit, 'square.centimeter')

module.exports = api[unit]
