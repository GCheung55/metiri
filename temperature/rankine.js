'use strict'

var api = require('../api/temperature')

var rankine = 'rankine'

require('../definition/temperature/rankine')

api.augment(rankine)

module.exports = api[rankine]
