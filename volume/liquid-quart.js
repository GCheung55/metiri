'use strict'

var api = require('../api/volume')

var unit = 'liquid-quart'

var def = require('../definition/volume/liquid-quart')

api.augment(unit, def)

module.exports = api[unit]
