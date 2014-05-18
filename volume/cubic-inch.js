'use strict'

var api = require('../api/volume')

var unit = 'cubic-inch'

var def = require('../definition/volume/cubic-inch')

api.augment(unit, def)

module.exports = api[unit]
