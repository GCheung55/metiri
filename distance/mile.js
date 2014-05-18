'use strict'

var api = require('../api/distance')

var unit = 'mile'

var def = require('../definition/distance/mile')

api.augment(unit, def)

module.exports = api[unit]
