'use strict'

var api = require('../api/volume')

var unit = 'dry-pint'

require('../definition/volume/dry-pint')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
