'use strict'

var api = require('../api/pressure')

var unit = 'hectopascal'

var def = require('../definition/pressure/hectopascal')

api.augment(unit, def)

module.exports = api[unit]
