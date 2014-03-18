'use strict'

var api = require('../api/volume')

var unit = 'liquid-quart'

require('../definition/volume/liquid-quart')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
