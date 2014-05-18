'use strict'

var api = require('../api/area')

var unit = 'square-meter'

var def = require('../definition/area/square-meter')

api.augment(unit, def)
api.augment(unit, 'square.meter')

module.exports = api[unit]
