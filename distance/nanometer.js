'use strict'

var api = require('../api/distance')

var unit = 'nanometer'

require('../definition/distance/nanometer')

api.augment(unit)

module.exports = api[unit]
