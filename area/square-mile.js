'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-mile')

var unit = 'square-mile'

api.augment(unit, def)

module.exports = api.get(unit)
