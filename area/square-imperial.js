'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-imperial')

var unit = 'square-imperial'

api.augment(unit, def)

module.exports = api.get(unit)
