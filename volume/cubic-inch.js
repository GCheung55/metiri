'use strict'

var api = require('../api/volume')
var def = require('../definition/volume/cubic-inch')

var unit = 'cubic-inch'

api.augment(unit, def)

module.exports = api.get(unit)
