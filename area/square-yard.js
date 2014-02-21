'use strict'

var api = require('../api/area')

var unit = 'square-yard'

require('../definition/area/square-yard')

api.augment(unit)
api.augment(unit, 'square.yard')

module.exports = api[unit]