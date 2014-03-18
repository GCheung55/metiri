'use strict'

var api = require('../api/volume')

var unit = 'dry-barrel'

require('../definition/volume/dry-barrel')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
