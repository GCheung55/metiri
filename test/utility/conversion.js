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

        forOwn(definitions._defs, function(def, name){
            get(u, name.replace('-', '.')).call(u)
        })

        actual = get(u, getstr).call(u, expected).value()

        assert(floatPointEpsilonEquals(expected, actual))
        // assert(true)

        // var expected = 1
        // var converter = this.converter[start](expected)
        // var actual

        // forOwn(definition._defs, function(def, name) {
        //     converter[name]()
        // })

        // actual = converter[start]().value()

        // assert(floatPointEpsilonEquals(expected, actual))
    }
}