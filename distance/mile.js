'use strict'

var api = require('../api/distance')

var unit = 'mile'

require('../definition/distance/mile')

api.augment(unit)

module.exports = api[unit]
