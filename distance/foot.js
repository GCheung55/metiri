'use strict'

var api = require('../api/distance')

var unit = 'foot'

require('../definition/distance/foot')

api.augment(unit)

module.exports = api[unit]
