'use strict'

var api = require('../api/volume')

var unit = 'imperial-pint'

require('../definition/volume/imperial-pint')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
