'use strict'

var api = require('../api/distance')

var unit = 'decimeter'

var def = require('../definition/distance/decimeter')

api.augment(unit, def)

module.exports = api[unit]
