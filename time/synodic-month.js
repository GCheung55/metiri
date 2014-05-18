'use strict'

var api = require('../api/time')
var def = require('../definition/time/synodic-month')

var unit = 'synodic-month'

api.augment(unit, def)

module.exports = api.get(unit)
