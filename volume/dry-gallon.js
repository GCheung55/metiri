'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/dry-gallon')

var unit = 'dry-gallon'

api.augment(unit, def)

module.exports = api.get(unit)
