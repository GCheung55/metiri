'use strict'

var api = require('../api/pressure')

var unit = 'newton-per-square-centimeter'

var def = require('../definition/pressure/newton-per-square-centimeter')

api.augment(unit, def)
api.augment(unit, 'newton.per.square.centimeter')

module.exports = api[unit]
