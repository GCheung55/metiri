var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var distance = require('../distance')
var distanceDefinition = require('../definition/_distance')

// load all definitions
require('../definition/distance')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

// augment distance unit constructor
;
(function() {
    forOwn(distanceDefinition._defs, function(def, name) {
        distance.augment(name)
    })
})()

testCase('distance', {

    'is a function': function() {
        assert.isFunction(distance)
    },

    'returns an object': function() {
        assert.isObject(distance())
    },

    'contains definitions': function() {
        var definitions = distance().definitions

        assert.defined(definitions._defs.centimeter)
        assert.defined(definitions._defs.meter)
    },

    'convert': {
        setUp: function() {
            this.converter = distance
        },

        'angstrom': conversion(distanceDefinition, 'angstrom'),

        'barleycorn': conversion(distanceDefinition, 'barleycorn'),

        'centimeter': conversion(distanceDefinition, 'centimeter'),

        'chain': conversion(distanceDefinition, 'chain'),

        'cubit': conversion(distanceDefinition, 'cubit'),

        'decimeter': conversion(distanceDefinition, 'decimeter'),

        'digit': conversion(distanceDefinition, 'digit'),

        'ell': conversion(distanceDefinition, 'ell'),

        'fathom': conversion(distanceDefinition, 'fathom'),

        'finger': conversion(distanceDefinition, 'finger'),

        'foot': conversion(distanceDefinition, 'foot'),

        'furlong': conversion(distanceDefinition, 'furlong'),

        'hand': conversion(distanceDefinition, 'hand'),

        'inch': conversion(distanceDefinition, 'inch'),

        'kilometer': conversion(distanceDefinition, 'kilometer'),

        'league': conversion(distanceDefinition, 'league'),

        'line': conversion(distanceDefinition, 'line'),

        'link': conversion(distanceDefinition, 'link'),

        'meter': conversion(distanceDefinition, 'meter'),

        'microinch': conversion(distanceDefinition, 'microinch'),

        'micrometer': conversion(distanceDefinition, 'micrometer'),

        'mil': conversion(distanceDefinition, 'mil'),

        'mile': conversion(distanceDefinition, 'mile'),

        'millimeter': conversion(distanceDefinition, 'millimeter'),

        'nail': conversion(distanceDefinition, 'nail'),

        'nanometer': conversion(distanceDefinition, 'nanometer'),

        'palm': conversion(distanceDefinition, 'palm'),

        'perch': conversion(distanceDefinition, 'perch'),

        'rod': conversion(distanceDefinition, 'rod'),

        'span': conversion(distanceDefinition, 'span'),

        'survey-foot': conversion(distanceDefinition, 'survey-foot'),

        'yard': conversion(distanceDefinition, 'yard')
    }
})