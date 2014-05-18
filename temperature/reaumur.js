'use strict'

var api = require('../api/temperature')

var reaumur = 'reaumur'

var def = require('../definition/temperature/reaumur')

api.augment(reaumur, def)

module.exports = api[reaumur]
