'use strict'

var api = require('../api/volume')

var unit = 'imperial-barrel'

var def = require('../definition/volume/imperial-barrel')

api.augment(unit, def)

module.exports = api[unit]
