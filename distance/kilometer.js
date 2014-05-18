'use strict'

var api = require('../api/distance')

var unit = 'kilometer'

var def = require('../definition/distance/kilometer')

api.augment(unit, def)

module.exports = api[unit]
