'use strict'

var api = require('./pascal')

var unit = 'kilopascal'

require('../definition/pressure/kilopascal')

api.augment(unit)

module.exports = api[unit]
