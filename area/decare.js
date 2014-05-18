'use strict'

var api = require('../api/area')

var unit = 'decare'

var def = require('../definition/area/decare')

api.augment(unit, def)

module.exports = api[unit]
