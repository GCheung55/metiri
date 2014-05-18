'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/second-per-mile')

var unit = 'second-per-mile'

api.augment(unit, def)

module.exports = api.get(unit)
