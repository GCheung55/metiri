'use strict'

var api = require('../api/pressure')
var def = require('../definition/pressure/pound-per-square-foot')

var unit = 'pound-per-square-foot'

api.augment(unit, def)

module.exports = api.get(unit)
