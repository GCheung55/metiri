'use strict'

var api = require('../api/volume')

var unit = 'imperial-bushel'

var def = require('../definition/volume/imperial-bushel')

api.augment(unit, def)

module.exports = api[unit]
