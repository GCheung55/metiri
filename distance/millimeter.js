'use strict'

var api = require('../api/distance')

var unit = 'millimeter'

var def = require('../definition/distance/millimeter')

api.augment(unit, def)

module.exports = api[unit]
