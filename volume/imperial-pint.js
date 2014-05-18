'use strict'

var api = require('../api/volume')

var unit = 'imperial-pint'

var def = require('../definition/volume/imperial-pint')

api.augment(unit, def)

module.exports = api[unit]
