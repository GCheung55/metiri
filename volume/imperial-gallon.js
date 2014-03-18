'use strict'

var api = require('../api/volume')

var unit = 'imperial-gallon'

require('../definition/volume/imperial-gallon')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
