'use strict'

var api = require('../api/volume')

var unit = 'liter'

require('../definition/volume/liter')

api.augment(unit)

module.exports = api[unit]
