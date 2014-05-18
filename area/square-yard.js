'use strict'

var api = require('../api/area')

var unit = 'square-yard'

var def = require('../definition/area/square-yard')

api.augment(unit, def)

module.exports = api[unit]
