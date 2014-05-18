'use strict'

var api = require('../api/pressure')

var unit = 'newton-per-square-millimeter'

var def = require('../definition/pressure/newton-per-square-millimeter')

api.augment(unit, def)

module.exports = api[unit]
