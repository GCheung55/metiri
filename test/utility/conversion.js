'use strict'
var buster = require('buster')
var forOwn = require('mout/object/forOwn')
var get = require('mout/object/get')
var floatPointEpsilonEquals = require('./floatPointEpsilonEquals')

var assert = buster.assert

var replace = function(name){
    return name.replace(/\-/g, '.')
}

module.exports = function(definitions, start) {
    return function() {
        var converter = this.converter
        var expected = 1
        var getstr = replace(start)
        var u = get(converter, getstr).call(converter, expected)
        var actual

        forOwn(definitions._defs, function(def, name){
            var n = replace(name)
            get(u, n).call(u)
        })

        actual = get(u, getstr).call(u, expected).value()

        assert(floatPointEpsilonEquals(expected, actual))
    }
}