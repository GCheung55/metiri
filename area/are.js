'use strict'

var api = require('../api/area')

var unit = 'are'

require('../definition/area/are')

api.augment(unit)

module.exports = api[unit]
