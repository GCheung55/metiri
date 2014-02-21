'use strict'

var api = require('../api/temperature')

var reaumur = 'reaumur'

require('../definition/temperature/reaumur')

api.augment(reaumur)

module.exports = api[reaumur]
