'use strict'

var api = require('../api/area')
var def = require('../definition/area/square-foot')

var unit = 'square-foot'

api.augment(unit, def)

module.exports = api.get(unit)
