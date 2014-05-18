'use strict'

var api = require('../api/area')

var unit = 'square-centimeter'

var def = require('../definition/area/square-centimeter')

api.augment(unit, def)

module.exports = api[unit]
