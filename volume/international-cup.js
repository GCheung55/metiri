'use strict'

var api = require('../api/volume')

var unit = 'international-cup'

require('../definition/volume/international-cup')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
