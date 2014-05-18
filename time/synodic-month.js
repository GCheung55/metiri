'use strict'

var api = require('../api/time')

var unit = 'synodic-month'

var def = require('../definition/time/synodic-month')

api.augment(unit, def)

module.exports = api[unit]
