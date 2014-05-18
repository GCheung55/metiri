'use strict'

var api = require('../api/distance')

var unit = 'inch'

var def = require('../definition/distance/inch')

api.augment(unit, def)

module.exports = api[unit]
