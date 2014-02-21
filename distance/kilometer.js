'use strict'

var api = require('../api/distance')

var unit = 'kilometer'

require('../definition/distance/kilometer')

api.augment(unit)

module.exports = api[unit]
