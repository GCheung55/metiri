'use strict'

var api = require('../api/pressure')

var unit = 'meganewton-per-square-meter'

var def = require('../definition/pressure/meganewton-per-square-meter')

api.augment(unit, def)
api.augment(unit, 'meganewton.per.square.meter')

module.exports = api[unit]
