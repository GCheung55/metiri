'use strict'

var api = require('../api/distance')

var unit = 'palm'

var def = require('../definition/distance/palm')

api.augment(unit, def)

module.exports = api[unit]
