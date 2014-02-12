'use strict'

var buster = require('buster')
var definitions = require('../definitions')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

testCase('definitions', {
    'is a function': function(){
        assert.isFunction(definitions)
    },

    '`new definitions` returns an object': function(){
        assert.isObject(new definitions)
    },

    'method': {
        setUp: function(){
            this.definitions = new definitions
        },

        '`set`': {
            'an object on `_defs` property': function(){
                var defObj = this.definitions
                var name = 'abc'
                var base = 'def'
                var factor = 1
                var zero = 0
                var validation = function(){}
                var symbol = 'ghi'
                var expected = {
                    base: base,
                    factor: factor,
                    zero: zero,
                    validation: validation,
                    symbol: symbol
                }
                var actual

                refute.defined(defObj._defs[name])

                // set with args
                defObj.set(name, base, factor, zero, validation, symbol)
                actual = defObj._defs[name]
                assert.defined(actual)
                assert.equals(actual, expected)

                // reset the defs
                delete defObj._defs[name]
                refute.defined(defObj._defs[name])

                // set with obj
                defObj.set(name, expected)
                actual = defObj._defs[name]
                assert.defined(actual)
                assert.equals(actual, expected)
            }
        },
        '`get` definition by name': function(){
            var defObj = this.definitions
            var name = 'abc'
            var base = 'cde'

            defObj.set(name, base)

            assert.equals(defObj.get(name), defObj._defs[name])
        }
    }
})