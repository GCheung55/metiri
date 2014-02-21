'use strict'

var api = require('../api/distance')

var unit = 'yard'

require('../definition/distance/yard')

api.augment(unit)

module.exports = api[unit]
