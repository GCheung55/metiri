'use strict'

var api = require('../api/area')

var unit = 'square-millimeter'

require('../definition/area/square-millimeter')

api.augment(unit)
api.augment(unit, 'square.millimeter')

module.exports = api[unit]
