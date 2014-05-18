'use strict'

var api = require('../api/mass')

var unit = 'pound'

var def = require('../definition/mass/pound')

api.augment(unit, def)

module.exports = api[unit]
