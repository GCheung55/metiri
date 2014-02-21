'use strict'

var api = require('./pascal')

var unit = 'newton-per-square-meter'

require('../definition/pressure/newton-per-square-meter')

api.augment(unit)
api.augment(unit, 'newton.per.square.meter')

module.exports = api[unit]
