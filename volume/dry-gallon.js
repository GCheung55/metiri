'use strict'

var api = require('../api/volume')

var unit = 'dry-gallon'

var def = require('../definition/volume/dry-gallon')

api.augment(unit, def)

module.exports = api[unit]
