'use strict'

var api = require('../api/volume')

var unit = 'liquid-pint'

var def = require('../definition/volume/liquid-pint')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
