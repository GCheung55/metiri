'use strict'

var api = require('./pascal')

var unit = 'kilogram-per-square-meter'

require('../definition/pressure/kilogram-per-square-meter')

api.augment(unit)
api.augment(unit, 'kilogram.per.square.meter')

module.exports = api[unit]
