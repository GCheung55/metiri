'use strict'

var api = require('../api/volume')

var unit = 'international-teaspoon'

require('../definition/volume/international-teaspoon')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
