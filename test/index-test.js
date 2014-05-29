var buster = require('buster')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

var metiri = require('../')

testCase('index', {
    setUp: function() {},

    'is an object': function() {
        assert.isObject(metiri)
    },

    'contains default convert types': function() {
        assert.defined(metiri.mass)

        assert.defined(metiri.temperature)

        assert.defined(metiri.distance)

        assert.defined(metiri.speed)

        assert.defined(metiri.area)

        assert.defined(metiri.pressure)

        assert.defined(metiri.time)

        assert.defined(metiri.volume)
    },

    'augment()': {
        'augments a specific type with a new definition and converter method': function(){
            var dummyName = 'blah'
            var dummyDef = [dummyName, 'gram', 1]
            var dummyPath = 'awesome.blah'
            var mass = metiri.mass

            refute.defined(mass.awesome)

            metiri.augment('mass', dummyName, dummyPath, dummyDef)

            assert.defined(mass.awesome.blah)
            assert(mass._definitions.get(dummyName))

            // cleanup
            delete mass._definitions._defs[dummyName]
            delete mass._methods.awesome
        },

        'throws on missing argument: type': function(){
            assert.exception(function(){
                metiri.augment()
            })
        },

        'throws on non-existent type': function(){
            assert.exception(function(){
                metiri.augment('blah')
            })
        }
    }
})