'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-millimeter')

var unit = 'square-millimeter'

api.augment(unit, def)

module.exports = api.get(unit)
