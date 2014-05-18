'use strict'

var api = require('../api/volume')

var unit = 'dry-quart'

var def = require('../definition/volume/dry-quart')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
