'use strict'

var api = require('../api/pressure')

var unit = 'megapascal'

var def = require('../definition/pressure/megapascal')

api.augment(unit, def)

module.exports = api[unit]
