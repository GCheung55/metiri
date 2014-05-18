'use strict'

var api = require('../api/distance')

var unit = 'cubit'

var def = require('../definition/distance/cubit')

api.augment(unit, def)

module.exports = api[unit]
