'use strict'

var buster = require('buster')
var api = require('../api')
var unit = require('../unit')
var definitions = require('../definitions')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

testCase('api', {
    'is a function': function() {
        assert.isFunction(api)
    },

    'execution returns a function': function() {
        var mD = new definitions

        assert.isFunction(api(unit, mD))
    },

    '`augment`': {
        setUp: function() {
            var mD = this.mD = new definitions
            var mU = this.mU = api(unit, mD)

            mD._defs = {
                'gram': {},
                'kilogram': {
                    base: 'gram',
                    factor: 1E3
                }
            }
        },

        'adds definition-named generic and prototype methods': function() {
            var mU = this.mU

            mU.augment('gram')
            mU.augment('kilogram')

            assert.isFunction(mU.gram)
            assert.isFunction(mU.kilogram)
            assert.isFunction(mU.prototype.gram)
            assert.isFunction(mU.prototype.kilogram)
        }
    },

    'generic method added by `augment`': {
        setUp: function() {
            var mD = this.mD = new definitions
            var mU = this.mU = api(unit, mD)

            mD._defs = {
                'gram': {},
                'kilogram': {
                    base: 'gram',
                    factor: 1E3
                }
            }
        },

        'returns instance of unit': function() {
            var mU = this.mU
            var gram
            var ret

            mU.augment('gram')

            ret = mU.gram()

            assert.hasPrototype(ret, mU.prototype)
        },

        'sets `value` (optional) and `from` as the generic name': function() {
            var mU = this.mU
            var value = 1
            var name = 'gram'
            var actual

            mU.augment(name)

            actual = mU.gram()
            assert.equals(actual._origVal, undefined)
            assert.equals(actual._from, name)

            actual = mU.gram(value)
            assert.equals(actual._origVal, value)
            assert.equals(actual._from, name)
        }
    },

    'prototype method added by `augment`': {
        setUp: function() {
            var mD = this.mD = new definitions
            var mU = this.mU = api(unit, mD)

            mD._defs = {
                'gram': {},
                'kilogram': {
                    base: 'gram',
                    factor: 1E3
                }
            }
        },

        'sets `value` or computed value, `from`, and `to`, and returns self': function() {
            var mU = this.mU
            var value = 1000
            var gram = 'gram'
            var kilogram = 'kilogram'
            var obj = new mU

            mU.augment(gram)
            mU.augment(kilogram)

            obj.gram()
            assert.equals(obj._from, gram)
            assert.equals(obj._to, gram)
            assert.equals(obj._origVal, undefined)

            obj.gram(value)
            assert.equals(obj._from, gram)
            assert.equals(obj._to, gram)
            assert.equals(obj._origVal, value)
        },

        'chained method converts stored value': function() {
            var mU = this.mU
            var value = 1000
            var gram = 'gram'
            var kilogram = 'kilogram'
            var obj = new mU

            mU.augment(gram)
            mU.augment(kilogram)

            obj.gram(value).kilogram()
            assert.equals(obj._origVal, 1000)

            obj.gram()
            assert.equals(obj._origVal, 1)
        },

        'setting value with chained method sets the method as both from/to': function() {
            var mU = this.mU
            var gram = 'gram'
            var kilogram = 'kilogram'
            var obj = new mU

            mU.augment(gram)
            mU.augment(kilogram)

            obj.gram(1000)
            assert.equals(obj._origVal, 1000)
            assert.equals(obj._from, gram)
            assert.equals(obj._to, gram)

            obj.kilogram()
            assert.equals(obj._origVal, 1000)
            assert.equals(obj._from, gram)
            assert.equals(obj._to, kilogram)

            obj.kilogram(1)
            assert.equals(obj._origVal, 1)
            assert.equals(obj._from, kilogram)
            assert.equals(obj._to, kilogram)
        }
    }
})