'use strict'

var api = require('../api/distance')

var unit = 'rod'

var def = require('../definition/distance/rod')

api.augment(unit, def)

module.exports = api[unit]
