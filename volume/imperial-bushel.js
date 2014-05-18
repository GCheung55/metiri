'use strict'

var api = require('../api/volume')

var unit = 'imperial-bushel'

var def = require('../definition/volume/imperial-bushel')

api.augment(unit, def)
api.augment(unit, unit)

module.exports = api[unit]
