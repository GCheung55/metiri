'use strict'

var api = require('../api/pressure')

var unit = 'bar'

require('../definition/pressure/bar')

api.augment(unit)

module.exports = api[unit]
