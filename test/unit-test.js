var buster = require('buster')
var unit = require('../unit')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

testCase('unit', {
    setUp: function() {},

    'is a function': function() {
        assert.isFunction(unit)
    },

    'returns an object': function() {
        assert.isObject(new unit)
    },

    // 'consumes a value that is set on the returned object': function() {
    //  var value = 123
    //  var obj = new unit(value)

    //  assert.equals(value, obj.value)
    // },

    'method': {
        setUp: function() {
            this.obj = new unit()
        },

        'check': {
            'returns true if all requirements have been set, false otherwise': function() {
                var value = 123
                var to = 'gram'
                var from = 'kilogram'
                var obj = this.obj

                assert.isFalse(obj.check())

                obj._value = value
                obj._to = to
                obj._from = to

                assert.isFalse(obj.check())

                obj._from = from

                assert.isTrue(obj.check())
            }
        },

        'to': {
            'consumes a key referencing a definition': function() {
                var def = 'gram'
                var obj = this.obj

                refute.defined(obj._to)

                obj.to(def)

                assert.equals(obj._to, def)
            }
        },

        'from': {
            'consumes a key referencing a definition': function() {
                var def = 'gram'
                var obj = this.obj

                refute.defined(obj._from)

                obj.from(def)

                assert.equals(obj._from, def)
            }
        },

        'convert': {
            'executes compute method when ready': function() {
                var obj = this.obj
                var value = 123
                var from = 'kilogram'
                var to = 'gram'
                var stub = this.stub(obj, 'compute')

                obj.to(to).from(from).convert(value)

                assert.calledOnce(stub, value)
            }
        },

        'value': {
            'returns the stored _value': function() {
                var obj = this.obj
                var value = 123

                obj._value = value

                assert.equals(obj.value(), value)
            }
        },

        'round': {
            'returns the rounded number from the stored _value': function() {
                var obj = this.obj
                var value = 0.99999
                var significantDigits = 5

                obj._value = value

                assert.equals(obj.round(), 1)
                assert.equals(obj.round(significantDigits), 0.99999)
            }
        }

        // 'toString': {
        //  'returns string prepresentation of _value': function() {
        //      var obj = this.obj
        //      var value = 123

        //      obj._value = value

        //      assert.equals(obj.toString(), value.toString())
        //  }
        // }
    }
})