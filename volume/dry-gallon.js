'use strict'

var api = require('../api/volume')

var unit = 'dry-gallon'

require('../definition/volume/dry-gallon')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
