'use strict'

var api = require('../api/distance')

var unit = 'yard'

var def = require('../definition/distance/yard')

api.augment(unit, def)

module.exports = api[unit]
