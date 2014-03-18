'use strict'

var api = require('../api/volume')

var unit = 'liquid-gallon'

require('../definition/volume/liquid-gallon')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
