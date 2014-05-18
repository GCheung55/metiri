'use strict'

var api = require('../api/area')

var unit = 'square-mile'

var def = require('../definition/area/square-mile')

api.augment(unit, def)
api.augment(unit, 'square.mile')

module.exports = api[unit]
