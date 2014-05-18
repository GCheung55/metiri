'use strict'

var api = require('../api/area')

var unit = 'township'

var def = require('../definition/area/township')

api.augment(unit, def)

module.exports = api[unit]
