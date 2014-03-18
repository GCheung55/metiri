'use strict'

var api = require('../api/volume')

var unit = 'imperial-peck'

require('../definition/volume/imperial-peck')

api.augment(unit)
api.augment(unit, unit)

module.exports = api[unit]
