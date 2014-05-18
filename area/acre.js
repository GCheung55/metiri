'use strict'

var api = require('../api/area')

var unit = 'acre'

var def = require('../definition/area/acre')

api.augment(unit, def)

module.exports = api[unit]
