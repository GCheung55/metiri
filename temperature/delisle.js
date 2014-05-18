'use strict'

var api = require('../api/temperature')

var delisle = 'delisle'

var def = require('../definition/temperature/delisle')

api.augment(delisle, def)

module.exports = api[delisle]
