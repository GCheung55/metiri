'use strict'

var api = require('../api/area')

var unit = 'acre'

require('../definition/area/acre')

api.augment(unit)

module.exports = api[unit]
