'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/cubic-centimeter')

var unit = 'cubic-centimeter'

api.augment(unit, def)

module.exports = api.get(unit)
