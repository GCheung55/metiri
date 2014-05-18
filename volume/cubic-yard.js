'use strict'

var api = require('../api/volume')

var unit = 'cubic-yard'

var def = require('../definition/volume/cubic-yard')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
