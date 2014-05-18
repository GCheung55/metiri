'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/mile-per-second')

var unit = 'mile-per-second'

api.augment(unit, def)

module.exports = api.get(unit)
