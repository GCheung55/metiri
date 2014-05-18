'use strict'

var api = require('../api/mass')

var unit = 'microgram'

var def = require('../definition/mass/microgram')

api.augment(unit, def)

module.exports = api[unit]
