'use strict'

var def = require('./ton-metric').slice()

def.shift()
def.unshift('tonne')

module.exports = def
