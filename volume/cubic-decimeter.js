'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/cubic-decimeter')

var unit = 'cubic-decimeter'

api.augment(unit, def)

module.exports = api.get(unit)
