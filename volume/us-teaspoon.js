'use strict'

var api = require('../api/volume')

var unit = 'us-teaspoon'

require('../definition/volume/us-teaspoon')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
