'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/kilometer-per-second')

var unit = 'kilometer-per-second'

api.augment(unit, def)

module.exports = api.get(unit)
