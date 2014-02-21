'use strict'

var api = require('../api/distance')

var unit = 'mil'

require('../definition/distance/mil')

api.augment(unit)

module.exports = api[unit]
