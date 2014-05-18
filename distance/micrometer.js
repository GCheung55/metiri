'use strict'

var api = require('../api/distance')

var unit = 'micrometer'

var def = require('../definition/distance/micrometer')

api.augment(unit, def)

module.exports = api[unit]
