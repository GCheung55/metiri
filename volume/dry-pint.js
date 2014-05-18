'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/dry-pint')

var unit = 'dry-pint'

api.augment(unit, def)

module.exports = api.get(unit)
