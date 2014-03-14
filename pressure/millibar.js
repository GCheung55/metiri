'use strict'

var api = require('../api/pressure')

var unit = 'millibar'

require('../definition/pressure/millibar')

api.augment(unit)

module.exports = api[unit]
