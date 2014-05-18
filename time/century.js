'use strict'

var api = require('../api/time')

var unit = 'century'

var def = require('../definition/time/century')

api.augment(unit, def)

module.exports = api[unit]
