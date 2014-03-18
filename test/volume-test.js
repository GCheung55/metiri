var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var volume = require('../api/volume')
var volumeDefinition = require('../definition/_volume')

// load all definitions
require('../definition/volume')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

// augment volume unit constructor
;
(function() {
    forOwn(volumeDefinition._defs, function(def, name) {
        volume.augment(name)
    })
})()

testCase('volume', {

    'is a function': function() {
        assert.isFunction(volume)
    },

    'returns an object': function() {
        assert.isObject(volume())
    },

    'contains definitions': function() {
        var definitions = volume().definitions

        assert.defined(definitions._defs.liter)
        assert.defined(definitions._defs.deciliter)
    },

    'convert': {
        setUp: function() {
            this.converter = volume
        },

        'cubic-kilometer': conversion(volumeDefinition, 'cubic-kilometer'),

        'cubic-meter': conversion(volumeDefinition, 'cubic-meter'),

        'cubic-decimeter': conversion(volumeDefinition, 'cubic-decimeter'),

        'cubic-centimeter': conversion(volumeDefinition, 'cubic-centimeter'),

        'cubic-millimeter': conversion(volumeDefinition, 'cubic-millimeter'),

        'hectoliter': conversion(volumeDefinition, 'hectoliter'),

        'decaliter': conversion(volumeDefinition, 'decaliter'),

        'liter': conversion(volumeDefinition, 'liter'),

        'deciliter': conversion(volumeDefinition, 'deciliter'),

        'centiliter': conversion(volumeDefinition, 'centiliter'),

        'milliliter': conversion(volumeDefinition, 'milliliter'),

        'microliter': conversion(volumeDefinition, 'microliter'),

        'acre-foot': conversion(volumeDefinition, 'acre-foot'),

        'barrel-petroleum': conversion(volumeDefinition, 'barrel-petroleum'),

        'liquid-gallon': conversion(volumeDefinition, 'liquid-gallon'),

        'liquid-quart': conversion(volumeDefinition, 'liquid-quart'),

        'liquid-pint': conversion(volumeDefinition, 'liquid-pint'),

        'gill': conversion(volumeDefinition, 'gill'),

        'fluid-ounce': conversion(volumeDefinition, 'fluid-ounce'),

        'fluid-dram': conversion(volumeDefinition, 'fluid-dram'),

        'minim': conversion(volumeDefinition, 'minim'),

        'dry-barrel': conversion(volumeDefinition, 'dry-barrel'),

        'dry-bushel': conversion(volumeDefinition, 'dry-bushel'),

        'dry-peck': conversion(volumeDefinition, 'dry-peck'),

        'dry-gallon': conversion(volumeDefinition, 'dry-gallon'),

        'dry-quart': conversion(volumeDefinition, 'dry-quart'),

        'dry-pint': conversion(volumeDefinition, 'dry-pint'),

        'imperial-perch': conversion(volumeDefinition, 'imperial-perch'),

        'imperial-barrel': conversion(volumeDefinition, 'imperial-barrel'),

        'imperial-bushel': conversion(volumeDefinition, 'imperial-bushel'),

        'imperial-peck': conversion(volumeDefinition, 'imperial-peck'),

        'imperial-gallon': conversion(volumeDefinition, 'imperial-gallon'),

        'imperial-quart': conversion(volumeDefinition, 'imperial-quart'),

        'imperial-pint': conversion(volumeDefinition, 'imperial-pint'),

        'imperial-fluid-ounce': conversion(volumeDefinition, 'imperial-fluid-ounce'),

        'cubic-yard': conversion(volumeDefinition, 'cubic-yard'),

        'cubic-foot': conversion(volumeDefinition, 'cubic-foot'),

        'cubic-inch': conversion(volumeDefinition, 'cubic-inch'),

        'us-cup': conversion(volumeDefinition, 'us-cup'),

        'us-tablespoon': conversion(volumeDefinition, 'us-tablespoon'),

        'us-teaspoon': conversion(volumeDefinition, 'us-teaspoon'),

        'international-cup': conversion(volumeDefinition, 'international-cup'),

        'international-tablespoon': conversion(volumeDefinition, 'international-tablespoon'),

        'international-teaspoon': conversion(volumeDefinition, 'international-teaspoon'),

        'planck-volume': conversion(volumeDefinition, 'planck-volume')
    }
})