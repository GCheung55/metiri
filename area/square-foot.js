'use strict'

var api = require('../api/area')

var unit = 'square-foot'

var def = require('../definition/area/square-foot')

api.augment(unit, def)
api.augment(unit, 'square.foot')

module.exports = api[unit]
