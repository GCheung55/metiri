'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/us-teaspoon')

var unit = 'us-teaspoon'

api.augment(unit, def)

module.exports = api.get(unit)
