var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var mass = require('../mass')
var massDefinition = require('../definition/_mass')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

testCase('mass', {
    'is a function': function() {
        assert.isFunction(mass)
    },

    'returns an object': function() {
        assert.isObject(mass())
    },

    'contains definitions': function() {
        var definitions = mass().definitions

        assert.defined(definitions._defs.gram)
        assert.defined(definitions._defs.kilogram)
    },

    'convert': {
        setUp: function() {
            this.converter = mass
        },

        'gram': conversion(massDefinition, 'gram'),

        'kilogram': conversion(massDefinition, 'kilogram'),

        'ton-long': conversion(massDefinition, 'ton-long'),

        'microgram': conversion(massDefinition, 'microgram'),

        'ton-metric': conversion(massDefinition, 'ton-metric'),

        'milligram': conversion(massDefinition, 'milligram'),

        'ounce': conversion(massDefinition, 'ounce'),

        'pound': conversion(massDefinition, 'pound'),

        'ton-short': conversion(massDefinition, 'ton-short'),

        'stone': conversion(massDefinition, 'stone')
    }
})