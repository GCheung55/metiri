'use strict'

var api = require('../api/pressure')

var unit = 'meganewton-per-square-meter'

require('../definition/pressure/meganewton-per-square-meter')

api.augment(unit)
api.augment(unit, 'meganewton.per.square.meter')

module.exports = api[unit]
