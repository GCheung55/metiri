'use strict'

var api = require('../api/volume')

var unit = 'dry-peck'

require('../definition/volume/dry-peck')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
