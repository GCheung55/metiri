'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/us-tablespoon')

var unit = 'us-tablespoon'

api.augment(unit, def)

module.exports = api.get(unit)
