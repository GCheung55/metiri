'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/barrel-petroleum')

var unit = 'barrel-petroleum'

api.augment(unit, def)

module.exports = api.get(unit)
