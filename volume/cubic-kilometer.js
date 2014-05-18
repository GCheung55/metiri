'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/cubic-kilometer')

var unit = 'cubic-kilometer'

api.augment(unit, def)

module.exports = api.get(unit)
