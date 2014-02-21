'use strict'

var api = require('./pascal')

var unit = 'kilonewton-per-square-meter'

require('../definition/pressure/kilonewton-per-square-meter')

api.augment(unit)
api.augment(unit, 'kilonewton.per.square.meter')

module.exports = api[unit]