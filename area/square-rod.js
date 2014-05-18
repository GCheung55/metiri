'use strict'

var api = require('../api/area')

var unit = 'square-rod'

var def = require('../definition/area/square-rod')

api.augment(unit, def)

module.exports = api[unit]
