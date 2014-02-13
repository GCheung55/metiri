var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var mass = require('../api/mass')
var massDefinition = require('../definition/_mass')

// load all definitions
require('../definition/mass')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

// augment distance unit constructor
;
(function() {
    forOwn(massDefinition._defs, function(def, name) {
        mass.augment(name)
    })
})()

testCase('mass', {
    setUp: function() {},

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

        'long-ton': conversion(massDefinition, 'long-ton'),

        'microgram': conversion(massDefinition, 'microgram'),

        'metric-ton': conversion(massDefinition, 'metric-ton'),

        'milligram': conversion(massDefinition, 'milligram'),

        'ounce': conversion(massDefinition, 'ounce'),

        'pound': conversion(massDefinition, 'pound'),

        'short-ton': conversion(massDefinition, 'short-ton'),

        'stone': conversion(massDefinition, 'stone')
    }
})