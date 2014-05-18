'use strict'

// var definitions = require('../definition/_temperature')
// var _api = require('./_api')

// module.exports = _api(definitions)

var unit = require('../unit')
var api = require('../api')
var definitions = require('../definitions')

module.exports = api(unit, new definitions)
