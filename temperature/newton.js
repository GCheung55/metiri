'use strict'

var api = require('../api/temperature')

var newton = 'newton'

var def = require('../definition/temperature/newton')

api.augment(newton, def)

module.exports = api[newton]
