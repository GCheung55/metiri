'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/imperial-gallon')

var unit = 'imperial-gallon'

api.augment(unit, def)

module.exports = api.get(unit)
