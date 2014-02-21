'use strict'

var api = require('../api/pressure')

var unit = 'pascal'

require('../definition/pressure/pascal')

api.augment(unit)

module.exports = api[unit]
