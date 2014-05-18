'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-kilometer')

var unit = 'square-kilometer'

api.augment(unit, def)

module.exports = api.get(unit)
