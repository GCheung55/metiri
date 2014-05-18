var buster = require('buster')

var forOwn = require('mout/object/forOwn')
var conversion = require('./utility/conversion')

var time = require('../time')
var timeDefinition = time._definitions

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

testCase('time', {
    'is a function': function() {
        assert.isFunction(time)
    },

    'returns an object': function() {
        assert.isObject(time())
    },

    'contains definitions': function() {
        var definitions = time().definitions

        assert.defined(definitions._defs['second'])
        assert.defined(definitions._defs['century'])
    },

    'convert': {
        setUp: function() {
            this.converter = time
        },

        'anomalistic-month': conversion(timeDefinition, 'anomalistic-month'),

        'anomalistic-year': conversion(timeDefinition, 'anomalistic-year'),

        'calendar-month': conversion(timeDefinition, 'calendar-month'),

        'century': conversion(timeDefinition, 'century'),

        'day': conversion(timeDefinition, 'day'),

        'dracontic-month': conversion(timeDefinition, 'dracontic-month'),

        'dracontic-year': conversion(timeDefinition, 'dracontic-year'),

        'gregorian-year': conversion(timeDefinition, 'gregorian-year'),

        'hour': conversion(timeDefinition, 'hour'),

        'julian-year': conversion(timeDefinition, 'julian-year'),

        'minute': conversion(timeDefinition, 'minute'),

        'planck-time': conversion(timeDefinition, 'planck-time'),

        'second': conversion(timeDefinition, 'second'),

        'syderic-month': conversion(timeDefinition, 'syderic-month'),

        'syderic-year': conversion(timeDefinition, 'syderic-year'),

        'synodic-month': conversion(timeDefinition, 'synodic-month'),

        'tropic-year': conversion(timeDefinition, 'tropic-year'),

        'week': conversion(timeDefinition, 'week')
    }
})