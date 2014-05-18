'use strict'

var api = require('../api/volume')

var unit = 'barrel-petroleum'

var def = require('../definition/volume/barrel-petroleum')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
