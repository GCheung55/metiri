'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/kilometer-per-hour')

var unit = 'kilometer-per-hour'

api.augment(unit, def)

module.exports = api.get(unit)
