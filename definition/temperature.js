'use strict'

var temperature = require('./_temperature')

require('./temperature/celsius')
require('./temperature/delisle')
require('./temperature/fahrenheit')
require('./temperature/kelvin')
require('./temperature/newton')
require('./temperature/rankine')
require('./temperature/reaumur')
require('./temperature/romer')

module.exports = temperature
