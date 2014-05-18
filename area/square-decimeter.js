'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-decimeter')

var unit = 'square-decimeter'

api.augment(unit, def)

module.exports = api.get(unit)
