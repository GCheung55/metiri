'use strict'

var api = require('../api/time')

var unit = 'century'

require('../definition/time/century')

api.augment(unit)

module.exports = api[unit]
