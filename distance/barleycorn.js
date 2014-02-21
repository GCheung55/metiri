'use strict'

var api = require('../api/distance')

var unit = 'barleycorn'

require('../definition/distance/barleycorn')

api.augment(unit)

module.exports = api[unit]
