'use strict'

var api = require('../api/distance')

var unit = 'finger'

require('../definition/distance/finger')

api.augment(unit)

module.exports = api[unit]
