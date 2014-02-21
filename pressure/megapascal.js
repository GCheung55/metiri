'use strict'

var api = require('./pascal')

var unit = 'megapascal'

require('../definition/pressure/megapascal')

api.augment(unit)

module.exports = api[unit]
