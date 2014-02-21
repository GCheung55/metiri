'use strict'

var api = require('../api/distance')

var unit = 'centimeter'

require('../definition/distance/centimeter')

api.augment(unit)

module.exports = api[unit]
