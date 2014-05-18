'use strict'

var api = require('../api/pressure')

var unit = 'millibar'

var def = require('../definition/pressure/millibar')

api.augment(unit, def)

module.exports = api[unit]
