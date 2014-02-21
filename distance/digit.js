'use strict'

var api = require('../api/distance')

var unit = 'digit'

require('../definition/distance/digit')

api.augment(unit)

module.exports = api[unit]
