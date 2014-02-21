'use strict'

var api = require('../api/mass')

var unit = 'kilogram'

require('../definition/mass/kilogram')

api.augment(unit)

module.exports = api[unit]
