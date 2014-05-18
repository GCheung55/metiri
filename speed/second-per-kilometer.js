'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/second-per-kilometer')

var unit = 'second-per-kilometer'

api.augment(unit, def)

module.exports = api.get(unit)
