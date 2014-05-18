'use strict'

var api = require('../api/mass')

var unit = 'stone'

var def = require('../definition/mass/stone')

api.augment(unit, def)

module.exports = api[unit]
