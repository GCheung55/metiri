'use strict'

var api = require('../api/distance')

var unit = 'decimeter'

require('../definition/distance/decimeter')

api.augment(unit)

module.exports = api[unit]
