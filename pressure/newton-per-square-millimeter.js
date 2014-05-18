'use strict'

var api = require('../api/pressure')
var def = require('../definition/pressure/newton-per-square-millimeter')

var unit = 'newton-per-square-millimeter'

api.augment(unit, def)

module.exports = api.get(unit)
