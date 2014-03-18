'use strict'

var api = require('../api/volume')

var unit = 'liquid-pint'

require('../definition/volume/liquid-pint')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
