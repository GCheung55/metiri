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

                obj._origVal = value
                obj._to = to

                assert.isFalse(obj.check())

                obj._from = from

                assert.isTrue(obj.check())
            }
        },

        'to': {
            'sets a key referencing a definitions': function() {
                var def = 'gram'
                var obj = this.obj

                refute.defined(obj._to)

                obj.to(def)

                assert.equals(obj._to, def)
            }
        },

        'from': {
            'returns a new object and sets a key referencing a definitions': function() {
                var def = 'gram'
                var obj = this.obj

                refute.defined(obj._from)

                obj.from(def)

                assert.equals(obj._from, def)
            }
        },

        'value': {
            'executes _compute method when ready': function() {
                var value = 123
                var from = 'kilogram'
                var to = 'gram'
                var obj = this.obj.to(to).from(from).convert(value)
                var stub = this.stub(obj, '_compute').returns(value)

                obj.value()

                assert.calledOnce(stub, value)
            },

            'returns the computed value': function() {
                var obj = this.obj
                var value = 123
                var checkStub = this.stub(obj, 'check').returns(true)
                var computeStub = this.stub(obj, 'compute').returns(value)

                obj._to = 'a'
                obj._from = 'b'
                obj._origVal = value

                assert.equals(obj.value(), value)
            }
        },

        'round': {
            'executes _compute method': function() {
                var value = 123
                var from = 'kilogram'
                var to = 'gram'
                var obj = this.obj.to(to).from(from).convert(value)
                var stub = this.stub(obj, '_compute')

                obj.round()

                assert.calledOnce(stub, value)
            },

            'returns the rounded number from the computed value': function() {
                var obj = this.obj
                var value = 0.99999
                var significantDigits = 5
                var stub = this.stub(obj, '_compute').returns(0.99999)

                obj._origVal = value

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