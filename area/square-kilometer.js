'use strict'

var api = require('../api/area')

var unit = 'square-kilometer'

var def = require('../definition/area/square-kilometer')

api.augment(unit, def)
api.augment(unit, 'square.kilometer')

module.exports = api[unit]
