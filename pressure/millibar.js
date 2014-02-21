'use strict'

var api = require('./pascal')

var unit = 'millibar'

require('../definition/pressure/millibar')

api.augment(unit)

module.exports = api[unit]
