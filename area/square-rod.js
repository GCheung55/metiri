'use strict'

var api = require('../api/area')

var unit = 'square-rod'

var def = require('../definition/area/square-rod')

api.augment(unit, def)
api.augment(unit, 'square.rod')

module.exports = api[unit]
