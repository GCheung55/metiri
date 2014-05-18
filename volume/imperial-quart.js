'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/imperial-quart')

var unit = 'imperial-quart'

api.augment(unit, def)

module.exports = api.get(unit)
