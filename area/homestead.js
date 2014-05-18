'use strict'

var api = require('../api/area')

var unit = 'homestead'

var def = require('../definition/area/homestead')

api.augment(unit, def)

module.exports = api[unit]
