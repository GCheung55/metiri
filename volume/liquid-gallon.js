'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/liquid-gallon')

var unit = 'liquid-gallon'

api.augment(unit, def)

module.exports = api.get(unit)
