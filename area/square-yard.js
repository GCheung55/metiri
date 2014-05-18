'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-yard')

var unit = 'square-yard'

api.augment(unit, def)

module.exports = api.get(unit)
