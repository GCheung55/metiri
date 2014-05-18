'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/liquid-quart')

var unit = 'liquid-quart'

api.augment(unit, def)

module.exports = api.get(unit)
