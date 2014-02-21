var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var pressure = require('../api/pressure')
var pressureDefinition = require('../definition/_pressure')

// load all definitions
require('../definition/pressure')
console.log(pressureDefinition)
var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

// augment pressure unit constructor
;
(function() {
    forOwn(pressureDefinition._defs, function(def, name) {
        pressure.augment(name)
    })
})()

testCase('=> pressure', {

    'is a function': function() {
        assert.isFunction(pressure)
    },

    'returns an object': function() {
        assert.isObject(pressure())
    },

    'contains definitions': function() {
        var definitions = pressure().definitions

        assert.defined(definitions._defs.bar)
        assert.defined(definitions._defs.pascal)
    },

    'convert': {
        setUp: function() {
            this.converter = pressure
        },

        'bar': conversion(pressureDefinition, 'bar'),

        'hectopascal': conversion(pressureDefinition, 'hectopascal'),

        'kilogram-per-square-centimeter': conversion(pressureDefinition, 'kilogram-per-square-centimeter'),

        'kilogram-per-square-meter': conversion(pressureDefinition, 'kilogram-per-square-meter'),

        'kilonewton-per-square-meter': conversion(pressureDefinition, 'kilonewton-per-square-meter'),

        'kilopascal': conversion(pressureDefinition, 'kilopascal'),

        'long-ton-per-square-foot': conversion(pressureDefinition, 'long-ton-per-square-foot'),

        'long-ton-per-square-inch': conversion(pressureDefinition, 'long-ton-per-square-inch'),

        'meganewton-per-square-meter': conversion(pressureDefinition, 'meganewton-per-square-meter'),

        'megapascal': conversion(pressureDefinition, 'megapascal'),

        'millibar': conversion(pressureDefinition, 'millibar'),

        'newton-per-square-centimeter': conversion(pressureDefinition, 'newton-per-square-centimeter'),

        'newton-per-square-meter': conversion(pressureDefinition, 'newton-per-square-meter'),

        'newton-per-square-millimeter': conversion(pressureDefinition, 'newton-per-square-millimeter'),

        'pascal': conversion(pressureDefinition, 'pascal'),

        'pound-per-square-foot': conversion(pressureDefinition, 'pound-per-square-foot'),

        'pound-per-square-inch': conversion(pressureDefinition, 'pound-per-square-inch'),

        'thousand-pounds-per-square-inch': conversion(pressureDefinition, 'thousand-pounds-per-square-inch'),

        'ton-per-square-foot': conversion(pressureDefinition, 'ton-per-square-foot'),

        'ton-per-square-inch': conversion(pressureDefinition, 'ton-per-square-inch')
    }
})