'use strict'

var api = require('../api/temperature')

var delisle = 'delisle'

require('../definition/temperature/delisle')

api.augment(delisle)

module.exports = api[delisle]
