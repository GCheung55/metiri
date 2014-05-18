'use strict'

var api = require('../api/distance')

var unit = 'line'

var def = require('../definition/distance/line')

api.augment(unit, def)

module.exports = api[unit]
