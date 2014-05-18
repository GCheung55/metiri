'use strict'

var api = require('../api/volume')

var unit = 'international-cup'

var def = require('../definition/volume/international-cup')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
