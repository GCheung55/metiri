'use strict'

var api = require('../api/pressure')

var unit = 'kilogram-per-square-meter'

var def = require('../definition/pressure/kilogram-per-square-meter')

api.augment(unit, def)

module.exports = api[unit]
