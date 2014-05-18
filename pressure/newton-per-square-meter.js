'use strict'

var api = require('../api/pressure')
var def = require('../definition/pressure/newton-per-square-meter')

var unit = 'newton-per-square-meter'

api.augment(unit, def)

module.exports = api.get(unit)
