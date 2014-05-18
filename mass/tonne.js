'use strict'

var api = require('../api/mass')

var unit = 'tonne'

var def = require('../definition/mass/tonne')

api.augment(unit, def)

module.exports = api[unit]
