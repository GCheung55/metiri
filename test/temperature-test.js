var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var temperature = require('../temperature')
var temperatureDefinition = temperature._definitions

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

testCase('temperature', {
    setUp: function() {},

    'is a function': function() {
        assert.isFunction(temperature)
    },

    'returns an object': function() {
        assert.isObject(temperature())
    },

    'contains definitions': function() {
        var definitions = temperature().definitions

        assert.defined(definitions._defs.kelvin)
        assert.defined(definitions._defs.celsius)
    },

    'convert': {
        setUp: function() {
            this.converter = temperature
        },

        'celsius': conversion(temperatureDefinition, 'celsius'),

        'delisle': conversion(temperatureDefinition, 'delisle'),

        'fahrenheit': conversion(temperatureDefinition, 'fahrenheit'),

        'kelvin': conversion(temperatureDefinition, 'kelvin'),

        'newton': conversion(temperatureDefinition, 'newton'),

        'rankine': conversion(temperatureDefinition, 'rankine'),

        'reaumur': conversion(temperatureDefinition, 'reaumur'),

        'romer': conversion(temperatureDefinition, 'romer')
    }
})