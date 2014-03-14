'use strict'

var api = require('../api/pressure')

var unit = 'kilogram-per-square-centimeter'

require('../definition/pressure/kilogram-per-square-centimeter')

api.augment(unit)
api.augment(unit, 'kilogram.per.square.centimeter')

module.exports = api[unit]
