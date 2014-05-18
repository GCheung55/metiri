'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/planck-volume')

var unit = 'planck-volume'

api.augment(unit, def)

module.exports = api.get(unit)
