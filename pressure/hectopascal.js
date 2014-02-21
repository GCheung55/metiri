'use strict'

var api = require('./pascal')

var unit = 'hectopascal'

require('../definition/pressure/hectopascal')

api.augment(unit)

module.exports = api[unit]
