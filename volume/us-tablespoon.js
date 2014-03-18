'use strict'

var api = require('../api/volume')

var unit = 'us-tablespoon'

require('../definition/volume/us-tablespoon')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
