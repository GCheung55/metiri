'use strict'

var api = require('../api/time')

var unit = 'synodic-month'

require('../definition/time/synodic-month')

api.augment(unit)
api.augment(unit, 'synodic.month')

module.exports = api[unit]
