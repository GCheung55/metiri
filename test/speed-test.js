var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var speed = require('../api/speed')
var speedDefinition = require('../definition/_speed')

// load all definitions
require('../definition/speed')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

// augment speed unit constructor
;
(function() {
    forOwn(speedDefinition._defs, function(def, name) {
        speed.augment(name)
    })
})()

testCase('speed', {

    'is a function': function() {
        assert.isFunction(speed)
    },

    'returns an object': function() {
        assert.isObject(speed())
    },

    'contains definitions': function() {
        var definitions = speed().definitions

        assert.defined(definitions._defs['knot'])
        assert.defined(definitions._defs['mile-per-second'])
    },

    'convert': {
        setUp: function() {
            this.converter = speed
        },

        'foot-per-minute': conversion(speedDefinition, 'foot-per-minute'),

        'foot-per-second': conversion(speedDefinition, 'foot-per-second'),

        'kilometer-per-hour': conversion(speedDefinition, 'kilometer-per-hour'),

        'kilometer-per-second': conversion(speedDefinition, 'kilometer-per-second'),

        'knot': conversion(speedDefinition, 'knot'),

        'meter-per-minute': conversion(speedDefinition, 'meter-per-minute'),

        'meter-per-second': conversion(speedDefinition, 'meter-per-second'),

        'mile-per-hour': conversion(speedDefinition, 'mile-per-hour'),

        'mile-per-second': conversion(speedDefinition, 'mile-per-second'),

        'minute-per-kilometer': conversion(speedDefinition, 'minute-per-kilometer'),

        'minute-per-mile': conversion(speedDefinition, 'minute-per-mile'),

        'sea-mile-per-hour': conversion(speedDefinition, 'sea-mile-per-hour'),

        'second-per-100-meters': conversion(speedDefinition, 'second-per-100-meters'),

        'second-per-100-yards': conversion(speedDefinition, 'second-per-100-yards'),

        'second-per-kilometer': conversion(speedDefinition, 'second-per-kilometer'),

        'second-per-mile': conversion(speedDefinition, 'second-per-mile'),

        'speed-of-light-in-vacuum': conversion(speedDefinition, 'speed-of-light-in-vacuum'),

        'speed-of-sound-in-gas': conversion(speedDefinition, 'speed-of-sound-in-gas')
    }
})