'use strict'

var api = require('../api/distance')

var unit = 'span'

require('../definition/distance/span')

api.augment(unit)

module.exports = api[unit]
