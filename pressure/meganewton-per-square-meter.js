'use strict'

var api = require('../api/pressure')
var def = require('../definition/pressure/meganewton-per-square-meter')

var unit = 'meganewton-per-square-meter'

api.augment(unit, def)

module.exports = api.get(unit)
