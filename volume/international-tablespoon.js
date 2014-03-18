'use strict'

var api = require('../api/volume')

var unit = 'international-tablespoon'

require('../definition/volume/international-tablespoon')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
