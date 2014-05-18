'use strict'

var api = require('../api/area')

var unit = 'rood'

var def = require('../definition/area/rood')

api.augment(unit, def)

module.exports = api[unit]
