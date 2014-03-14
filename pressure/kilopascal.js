'use strict'

var api = require('../api/pressure')

var unit = 'kilopascal'

require('../definition/pressure/kilopascal')

api.augment(unit)

module.exports = api[unit]
