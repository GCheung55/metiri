'use strict'

var api = require('../api/distance')

var unit = 'rod'

require('../definition/distance/rod')

api.augment(unit)

module.exports = api[unit]
