'use strict'

var api = require('../api/pressure')

var unit = 'newton-per-square-centimeter'

var def = require('../definition/pressure/newton-per-square-centimeter')

api.augment(unit, def)

module.exports = api[unit]
