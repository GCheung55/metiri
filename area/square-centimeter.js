'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-centimeter')

var unit = 'square-centimeter'

api.augment(unit, def)

module.exports = api.get(unit)
