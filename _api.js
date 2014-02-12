'use strict'

var unit = require('./unit')
var api = require('./api')

// Simple solution instead of using mout/function/partial
// May revisit
module.exports = function(definitions) {
	return api(unit, definitions)
}
