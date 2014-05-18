'use strict'

var api = require('../api/pressure')

var unit = 'kilopascal'

var def = require('../definition/pressure/kilopascal')

api.augment(unit, def)

module.exports = api[unit]
