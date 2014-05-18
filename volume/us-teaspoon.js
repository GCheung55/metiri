'use strict'

var api = require('../api/volume')

var unit = 'us-teaspoon'

var def = require('../definition/volume/us-teaspoon')

api.augment(unit, def)

module.exports = api[unit]
