'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/international-tablespoon')

var unit = 'international-tablespoon'

api.augment(unit, def)

module.exports = api.get(unit)
