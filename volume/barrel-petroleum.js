'use strict'

var api = require('../api/volume')

var unit = 'barrel-petroleum'

var def = require('../definition/volume/barrel-petroleum')

api.augment(unit, def)

module.exports = api[unit]
