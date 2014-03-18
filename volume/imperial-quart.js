'use strict'

var api = require('../api/volume')

var unit = 'imperial-quart'

require('../definition/volume/imperial-quart')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
