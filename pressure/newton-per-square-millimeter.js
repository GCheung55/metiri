'use strict'

var api = require('./pascal')

var unit = 'newton-per-square-millimeter'

require('../definition/pressure/newton-per-square-millimeter')

api.augment(unit)
api.augment(unit, 'newton.per.square.millimeter')

module.exports = api[unit]