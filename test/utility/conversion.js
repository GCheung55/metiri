'use strict'
var buster = require('buster')
var forOwn = require('mout/object/forOwn')
var floatPointEpsilonEquals = require('./floatPointEpsilonEquals')

var assert = buster.assert

module.exports = function(definition, start) {
    return function() {
        var expected = 1
        var converter = this.converter[start](expected)
        var actual

        forOwn(definition._defs, function(def, name) {
            converter[name]()
        })

        actual = converter[start]().value()

        assert(floatPointEpsilonEquals(expected, actual))
    }
}