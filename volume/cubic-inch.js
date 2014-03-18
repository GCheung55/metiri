'use strict'

var api = require('../api/volume')

var unit = 'cubic-inch'

require('../definition/volume/cubic-inch')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
