'use strict'

var api = require('../api/volume')

var unit = 'imperial-gallon'

var def = require('../definition/volume/imperial-gallon')

api.augment(unit, def)

module.exports = api[unit]
