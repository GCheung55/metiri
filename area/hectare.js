'use strict'

var api = require('../api/area')

var unit = 'hectare'

require('../definition/area/hectare')

api.augment(unit)

module.exports = api[unit]
