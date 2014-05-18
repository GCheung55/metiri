'use strict'

var api = require('../api/volume')

var unit = 'imperial-gallon'

var def = require('../definition/volume/imperial-gallon')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
