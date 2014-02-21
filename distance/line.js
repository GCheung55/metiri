'use strict'

var api = require('../api/distance')

var unit = 'line'

require('../definition/distance/line')

api.augment(unit)

module.exports = api[unit]
