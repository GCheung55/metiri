'use strict'

var api = require('../api/distance')

var unit = 'cubit'

require('../definition/distance/cubit')

api.augment(unit)

module.exports = api[unit]
