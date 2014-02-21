'use strict'

var api = require('../api/mass')

var unit = 'milligram'

require('../definition/mass/milligram')

api.augment(unit)

module.exports = api[unit]
