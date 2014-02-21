var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var area = require('../api/area')
var areaDefinition = require('../definition/_area')

// load all definitions
require('../definition/area')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

// augment area unit constructor
;
(function() {
    forOwn(areaDefinition._defs, function(def, name) {
        area.augment(name)
    })
})()

testCase('area', {

    'is a function': function() {
        assert.isFunction(area)
    },

    'returns an object': function() {
        assert.isObject(area())
    },

    'contains definitions': function() {
        var definitions = area().definitions

        assert.defined(definitions._defs.acre)
        assert.defined(definitions._defs.hectare)
    },

    'convert': {
        setUp: function() {
            this.converter = area
        },

        'acre': conversion(areaDefinition, 'acre'),

        'are': conversion(areaDefinition, 'are'),

        'barn': conversion(areaDefinition, 'barn'),

        'decare': conversion(areaDefinition, 'decare'),

        'hectare': conversion(areaDefinition, 'hectare'),

        'homestead': conversion(areaDefinition, 'homestead'),

        'perch': conversion(areaDefinition, 'perch'),

        'rood': conversion(areaDefinition, 'rood'),

        'square-centimeter': conversion(areaDefinition, 'square-centimeter'),

        'square-decimeter': conversion(areaDefinition, 'square-decimeter'),

        'square-foot': conversion(areaDefinition, 'square-foot'),

        'square-inch': conversion(areaDefinition, 'square-inch'),

        'square-kilometer': conversion(areaDefinition, 'square-kilometer'),

        'square-meter': conversion(areaDefinition, 'square-meter'),

        'square-mile': conversion(areaDefinition, 'square-mile'),

        'square-millimeter': conversion(areaDefinition, 'square-millimeter'),

        'square-rod': conversion(areaDefinition, 'square-rod'),

        'square-yard': conversion(areaDefinition, 'square-yard'),

        'square': conversion(areaDefinition, 'square'),

        'township': conversion(areaDefinition, 'township')
    }
})