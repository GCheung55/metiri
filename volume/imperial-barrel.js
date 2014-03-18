'use strict'

var api = require('../api/volume')

var unit = 'imperial-barrel'

require('../definition/volume/imperial-barrel')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
