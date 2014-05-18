'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/foot-per-second')

var unit = 'foot-per-second'

api.augment(unit, def)

module.exports = api.get(unit)
