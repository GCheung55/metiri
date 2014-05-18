'use strict'

// var distance = require('./perch')

// distance.set('rod', distance.get('perch'))

// module.exports = distance

var def = require('./perch').slice()

def.shift()
def.unshift('rod')

module.exports = def
