'use strict'

var api = require('../api/pressure')

var unit = 'bar'

var def = require('../definition/pressure/bar')

api.augment(unit, def)

module.exports = api[unit]
