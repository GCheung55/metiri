'use strict'

var api = require('../api/volume')

var unit = 'international-teaspoon'

var def = require('../definition/volume/international-teaspoon')

api.augment(unit, def)

module.exports = api[unit]
