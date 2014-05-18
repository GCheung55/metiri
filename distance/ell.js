'use strict'

var api = require('../api/distance')

var unit = 'ell'

var def = require('../definition/distance/ell')

api.augment(unit, def)

module.exports = api[unit]
