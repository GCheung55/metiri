'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-rod')

var unit = 'square-rod'

api.augment(unit, def)

module.exports = api.get(unit)
