'use strict'

var metiri = require('./metiri')

// Load the definitions
require('./definition/mass')

require('./definition/temperature')

require('./definition/distance')

require('./definition/speed')

module.exports = metiri
