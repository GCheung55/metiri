'use strict'

var api = require('../api/area')

var unit = 'square-foot'

require('../definition/area/square-foot')

api.augment(unit)
api.augment(unit, 'square.foot')

module.exports = api[unit]
