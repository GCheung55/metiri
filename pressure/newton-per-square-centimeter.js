'use strict'

var api = require('../api/pressure')

var unit = 'newton-per-square-centimeter'

require('../definition/pressure/newton-per-square-centimeter')

api.augment(unit)
api.augment(unit, 'newton.per.square.centimeter')

module.exports = api[unit]
