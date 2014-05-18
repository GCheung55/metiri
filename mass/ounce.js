'use strict'

var api = require('../api/mass')

var unit = 'ounce'

var def = require('../definition/mass/ounce')

api.augment(unit, def)

module.exports = api[unit]
