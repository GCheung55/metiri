'use strict'

var api = require('../api/distance')

var unit = 'nail'

var def = require('../definition/distance/nail')

api.augment(unit, def)

module.exports = api[unit]
