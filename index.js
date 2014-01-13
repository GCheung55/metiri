'use strict'

var metiri = require('./metiri')

metiri.mass = require('./mass')
metiri.temperature = require('./temperature')
metiri.distance = require('./distance')
metiri.speed = require('./speed')

// Load the definitions
require('./definition/mass/gram')
require('./definition/mass/kilogram')
require('./definition/mass/long-ton')
require('./definition/mass/microgram')
require('./definition/mass/metric-ton')
require('./definition/mass/milligram')
require('./definition/mass/ounce')
require('./definition/mass/pound')
require('./definition/mass/short-ton')
require('./definition/mass/stone')

require('./definition/temperature/celsius')
require('./definition/temperature/delisle')
require('./definition/temperature/fahrenheit')
require('./definition/temperature/kelvin')
require('./definition/temperature/newton')
require('./definition/temperature/rankine')
require('./definition/temperature/reaumur')
require('./definition/temperature/romer')

// @todo uncomment after size comparison
// require('./definition/distance/angstrom')
// require('./definition/distance/barleycorn')
require('./definition/distance/centimeter')
// require('./definition/distance/chain')
// require('./definition/distance/cubit')
// require('./definition/distance/decimeter')
// require('./definition/distance/digit')
// require('./definition/distance/ell')
// require('./definition/distance/fathom')
// require('./definition/distance/finger')
require('./definition/distance/foot')
// require('./definition/distance/furlong')
// require('./definition/distance/hand')
require('./definition/distance/inch')
require('./definition/distance/kilometer')
// require('./definition/distance/league')
// require('./definition/distance/line')
// require('./definition/distance/link')
require('./definition/distance/meter')
// require('./definition/distance/microinch')
// require('./definition/distance/micrometer')
// require('./definition/distance/mil')
require('./definition/distance/mile')
require('./definition/distance/millimeter')
// require('./definition/distance/nail')
// require('./definition/distance/nanometer')
// require('./definition/distance/palm')
// require('./definition/distance/perch')
// require('./definition/distance/rod')
// require('./definition/distance/span')
// require('./definition/distance/survey-foot')
require('./definition/distance/yard')
// require('./definition/distance/nautical/sea-mile')

require('./definition/speed/foot-per-minute')
require('./definition/speed/foot-per-second')
require('./definition/speed/kilometer-per-hour')
require('./definition/speed/kilometer-per-second')
require('./definition/speed/knot')
require('./definition/speed/meter-per-minute')
require('./definition/speed/meter-per-second')
require('./definition/speed/mile-per-hour')
require('./definition/speed/mile-per-second')
require('./definition/speed/minute-per-kilometer')
require('./definition/speed/minute-per-mile')
require('./definition/speed/sea-mile-per-hour')
require('./definition/speed/second-per-100-meters')
require('./definition/speed/second-per-100-yards')
require('./definition/speed/second-per-mile')
require('./definition/speed/speed-of-light-in-vacuum')
require('./definition/speed/speed-of-sound-in-gas')

module.exports = metiri
