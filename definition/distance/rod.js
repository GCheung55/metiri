'use strict'

var distance = require('./perch')
var values = require('mout/object/values')

distance.set('rod', distance.get('perch'))

module.exports = distance
