'use strict'

var api = require('../api/volume')

var unit = 'dry-pint'

var def = require('../definition/volume/dry-pint')

api.augment(unit, def)

module.exports = api[unit]
