'use strict'

var api = require('../api/distance')

var unit = 'barleycorn'

var def = require('../definition/distance/barleycorn')

api.augment(unit, def)

module.exports = api[unit]
