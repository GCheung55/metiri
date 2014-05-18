'use strict'

var api = require('../api/volume')

var unit = 'us-tablespoon'

var def = require('../definition/volume/us-tablespoon')

api.augment(unit, def)

module.exports = api[unit]
