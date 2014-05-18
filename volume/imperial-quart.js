'use strict'

var api = require('../api/volume')

var unit = 'imperial-quart'

var def = require('../definition/volume/imperial-quart')

api.augment(unit, def)

module.exports = api[unit]
