'use strict'

var api = require('../api/distance')

var unit = 'inch'

require('../definition/distance/inch')

api.augment(unit)

module.exports = api[unit]
