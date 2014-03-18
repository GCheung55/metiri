'use strict'

var api = require('../api/volume')

var unit = 'decaliter'

require('../definition/volume/decaliter')

api.augment(unit)

module.exports = api[unit]
