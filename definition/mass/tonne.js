'use strict'

// var mass = require('./metric-ton')

// mass['tonne'] = mass['metric-ton']

// module.exports = mass

var def = require('./ton-metric').slice()

def.shift()
def.unshift('tonne')

module.exports = def
