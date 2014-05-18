'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/second-per-100-meters')

var unit = 'second-per-100-meters'

api.augment(unit, def)

module.exports = api.get(unit)
