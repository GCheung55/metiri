'use strict'
var buster = require('buster')
var forOwn = require('mout/object/forOwn')
var get = require('mout/object/get')
var floatPointEpsilonEquals = require('./floatPointEpsilonEquals')

var assert = buster.assert

module.exports = function(definitions, start) {
    return function() {
        var converter = this.converter
        var expected = 1
        var getstr = start.replace('-', '.')
        var u = get(converter, getstr).call(converter, expected)
        var actual
console.log(converter.square.meter)
        forOwn(definitions._defs, function(def, name){
console.log(name)
            get(u, name.replace('-', '.')).call(u)
        })

        actual = get(u, getstr).call(u, expected).value()

        assert(floatPointEpsilonEquals(expected, actual))
    }
}