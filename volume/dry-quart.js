'use strict'

var api = require('../api/volume')

var unit = 'dry-quart'

require('../definition/volume/dry-quart')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
