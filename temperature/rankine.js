'use strict'

var api = require('../api/temperature')

var rankine = 'rankine'

var def = require('../definition/temperature/rankine')

api.augment(rankine, def)

module.exports = api[rankine]
