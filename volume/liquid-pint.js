'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/liquid-pint')

var unit = 'liquid-pint'

api.augment(unit, def)

module.exports = api.get(unit)
