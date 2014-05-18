'use strict'

var api = require('../api/volume')

var unit = 'international-tablespoon'

var def = require('../definition/volume/international-tablespoon')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
