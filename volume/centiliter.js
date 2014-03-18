'use strict'

var api = require('../api/volume')

var unit = 'centiliter'

require('../definition/volume/centiliter')

api.augment(unit)

module.exports = api[unit]
