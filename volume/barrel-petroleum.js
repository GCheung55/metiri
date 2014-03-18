'use strict'

var api = require('../api/volume')

var unit = 'barrel-petroleum'

require('../definition/volume/barrel-petroleum')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
