'use strict'

var api = require('../api/temperature')

var newton = 'newton'

require('../definition/temperature/newton')

api.augment(newton)

module.exports = api[newton]
