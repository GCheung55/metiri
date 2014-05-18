'use strict'

var api = require('../api/area')

var unit = 'are'

var def = require('../definition/area/are')

api.augment(unit, def)

module.exports = api[unit]
