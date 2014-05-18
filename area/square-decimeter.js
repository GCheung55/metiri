'use strict'

var api = require('../api/area')

var unit = 'square-decimeter'

var def = require('../definition/area/square-decimeter')

api.augment(unit, def)
api.augment(unit, 'square.decimeter')

module.exports = api[unit]
