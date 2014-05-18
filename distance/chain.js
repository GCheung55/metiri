'use strict'

var api = require('../api/distance')

var unit = 'chain'

var def = require('../definition/distance/chain')

api.augment(unit, def)

module.exports = api[unit]
