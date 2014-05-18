'use strict'

var api = require('../api/distance')

var unit = 'furlong'

var def = require('../definition/distance/furlong')

api.augment(unit, def)

module.exports = api[unit]
