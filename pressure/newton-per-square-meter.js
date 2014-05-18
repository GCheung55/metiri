'use strict'

var api = require('../api/pressure')

var unit = 'newton-per-square-meter'

var def = require('../definition/pressure/newton-per-square-meter')

api.augment(unit, def)

module.exports = api[unit]
