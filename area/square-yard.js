'use strict'

var api = require('../api/area')

var unit = 'square-yard'

var def = require('../definition/area/square-yard')

api.augment(unit, def)
api.augment(unit, 'square.yard')

module.exports = api[unit]
