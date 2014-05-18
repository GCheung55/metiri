'use strict'

var api = require('../api/volume')

var unit = 'cubic-foot'

var def = require('../definition/volume/cubic-foot')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
