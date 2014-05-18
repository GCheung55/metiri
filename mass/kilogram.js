'use strict'

var api = require('../api/mass')

var unit = 'kilogram'

var def = require('../definition/mass/kilogram')

api.augment(unit, def)

module.exports = api[unit]
