'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/international-teaspoon')

var unit = 'international-teaspoon'

api.augment(unit, def)

module.exports = api.get(unit)
