'use strict'

var api = require('../api/pressure')

var unit = 'megapascal'

require('../definition/pressure/megapascal')

api.augment(unit)

module.exports = api[unit]
