'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/cubic-millimeter')

var unit = 'cubic-millimeter'

api.augment(unit, def)

module.exports = api.get(unit)
