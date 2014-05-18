'use strict'

var api = require('../api/area')

var unit = 'square-centimeter'

var def = require('../definition/area/square-centimeter')

api.augment(unit, def)
api.augment(unit, 'square.centimeter')

module.exports = api[unit]
