'use strict'

var api = require('../api/distance')

var unit = 'millimeter'

require('../definition/distance/millimeter')

api.augment(unit)

module.exports = api[unit]
