'use strict'

var api = require('../api/area')

var unit = 'hectare'

var def = require('../definition/area/hectare')

api.augment(unit, def)

module.exports = api[unit]
