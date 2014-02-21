'use strict'

var api = require('../api/mass')

var unit = 'microgram'

require('../definition/mass/microgram')

api.augment(unit)

module.exports = api[unit]
