'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/foot-per-minute')

var unit = 'foot-per-minute'

api.augment(unit, def)

module.exports = api.get(unit)
