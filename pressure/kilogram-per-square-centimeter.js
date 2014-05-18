'use strict'

var api = require('../api/pressure')

var unit = 'kilogram-per-square-centimeter'

var def = require('../definition/pressure/kilogram-per-square-centimeter')

api.augment(unit, def)

module.exports = api[unit]
