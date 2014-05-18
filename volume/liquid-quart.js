'use strict'

var api = require('../api/volume')

var unit = 'liquid-quart'

var def = require('../definition/volume/liquid-quart')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
