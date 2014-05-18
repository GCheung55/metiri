'use strict'

var api = require('../api/distance')

var unit = 'digit'

var def = require('../definition/distance/digit')

api.augment(unit, def)

module.exports = api[unit]
