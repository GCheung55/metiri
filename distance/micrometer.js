'use strict'

var api = require('../api/distance')

var unit = 'micrometer'

require('../definition/distance/micrometer')

api.augment(unit)

module.exports = api[unit]
