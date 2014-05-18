'use strict'

var api = require('../api/volume')

var unit = 'imperial-peck'

var def = require('../definition/volume/imperial-peck')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
