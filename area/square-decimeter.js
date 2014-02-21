'use strict'

var api = require('../api/area')

var unit = 'square-decimeter'

require('../definition/area/square-decimeter')

api.augment(unit)
api.augment(unit, 'square.decimeter')

module.exports = api[unit]
