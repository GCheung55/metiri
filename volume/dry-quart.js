'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/dry-quart')

var unit = 'dry-quart'

api.augment(unit, def)

module.exports = api.get(unit)
