'use strict'

var api = require('../api/pressure')

var unit = 'pascal'

var def = require('../definition/pressure/pascal')

api.augment(unit, def)

module.exports = api[unit]
