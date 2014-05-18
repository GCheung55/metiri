'use strict'

var api = require('../api/speed')
var def = require('../definition/speed/speed-of-light-in-vacuum')

var unit = 'speed-of-light-in-vacuum'

api.augment(unit, def)

module.exports = api.get(unit)
