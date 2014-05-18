'use strict'

var api = require('../api/distance')

var unit = 'league'

var def = require('../definition/distance/league')

api.augment(unit, def)

module.exports = api[unit]
