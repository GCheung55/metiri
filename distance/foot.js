'use strict'

var api = require('../api/distance')

var unit = 'foot'

var def = require('../definition/distance/foot')

api.augment(unit, def)

module.exports = api[unit]
