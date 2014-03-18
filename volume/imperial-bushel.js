'use strict'

var api = require('../api/volume')

var unit = 'imperial-bushel'

require('../definition/volume/imperial-bushel')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
