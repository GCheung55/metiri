'use strict'

var api = require('../api/pressure')

var unit = 'hectopascal'

require('../definition/pressure/hectopascal')

api.augment(unit)

module.exports = api[unit]
