'use strict'

var api = require('../api/distance')

var unit = 'nail'

require('../definition/distance/nail')

api.augment(unit)

module.exports = api[unit]
