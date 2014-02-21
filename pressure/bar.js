'use strict'

var api = require('./pascal')

var unit = 'bar'

require('../definition/pressure/bar')

api.augment(unit)

module.exports = api[unit]
