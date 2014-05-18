'use strict'

var api = require('../api/area')

var unit = 'square-millimeter'

var def = require('../definition/area/square-millimeter')

api.augment(unit, def)
api.augment(unit, 'square.millimeter')

module.exports = api[unit]
