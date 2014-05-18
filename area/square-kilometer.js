'use strict'

var api = require('../api/area')

var unit = 'square-kilometer'

var def = require('../definition/area/square-kilometer')

api.augment(unit, def)

module.exports = api[unit]
