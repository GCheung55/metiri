'use strict'

var api = require('../api/speed')

var unit = 'second-per-mile'

var def = require('../definition/speed/second-per-mile')

api.augment(unit, def)
api.augment(unit, 'second.per.mile')

module.exports = api[unit]
