'use strict'

var api = require('../api/volume')

var unit = 'deciliter'

require('../definition/volume/deciliter')

api.augment(unit)

module.exports = api[unit]
