'use strict'

var api = require('../api/distance')

var unit = 'meter'

require('../definition/distance/meter')

api.augment(unit)

module.exports = api[unit]
