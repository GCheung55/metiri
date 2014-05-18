'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-meter')

var unit = 'square-meter'

api.augment(unit, def)

module.exports = api.get(unit)
