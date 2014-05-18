'use strict'

var api = require('../api/volume')

var unit = 'acre-foot'

var def = require('../definition/volume/acre-foot')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
