'use strict'

var api = require('../api/volume')

var unit = 'fluid-ounce'

require('../definition/volume/fluid-ounce')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
