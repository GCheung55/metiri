'use strict'

var api = require('../api/pressure')

var unit = 'kilonewton-per-square-meter'

var def = require('../definition/pressure/kilonewton-per-square-meter')

api.augment(unit, def)

module.exports = api[unit]
