'use strict'

var api = require('../api/volume')

var unit = 'imperial-fluid-ounce'

require('../definition/volume/imperial-fluid-ounce')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
