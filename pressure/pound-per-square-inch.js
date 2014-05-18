'use strict'

var api = require('../api/pressure')
var def = require('../definition/pressure/pound-per-square-inch')

var unit = 'pound-per-square-inch'

api.augment(unit, def)

module.exports = api.get(unit)
