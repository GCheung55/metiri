'use strict'

var api = require('../api/volume')

var unit = 'us-cup'

require('../definition/volume/us-cup')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
