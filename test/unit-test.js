var buster = require('buster')
var unit = require('../unit')
var definitions = require('../definitions')
var gram = require('../definition/mass/gram')
var kilogram = require('../definition/mass/kilogram')
var milligram = require('../definition/mass/milligram')

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

        'create()': {
            'returns an instance of the unit with the same definitions': function() {
                var obj = this.obj
                var copy = obj.create()

                assert.equals(obj.definitions, copy.definitions)
            },

            'set value, from, to values on the new instance': function() {
                var value = 123
                var to = 'gram'
                var from = 'kilogram'
                var obj = this.obj
                var copy = obj.create(value, from, to)

                assert.equals(copy._from, from)
                assert.equals(copy._to, to)
                assert.equals(copy._origVal, value)
            }
        },

        'convert() sets/gets the value to/from the _origVal property': function() {
            var value = 100
            var obj = this.obj

            refute.defined(obj._origVal)

            obj.convert(value)

            assert.equals(obj._origVal, value)
            assert.equals(obj.convert(), value)
        },

        'check()': {
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

        'to() sets/gets a value to/from the _to property': function() {
            var def = 'gram'
            var obj = this.obj

            refute.defined(obj._to)

            obj.to(def)

            assert.equals(obj._to, def)
            assert.equals(obj.to(), def)
        },

        'from() sets/gets a value to/from the _from property': function() {
            var def = 'gram'
            var obj = this.obj

            refute.defined(obj._from)

            obj.from(def)

            assert.equals(obj._from, def)
            assert.equals(obj.from(), def)
        },

        'value()': {
            'executes compute method': function() {
                var value = 123
                var from = 'kilogram'
                var to = 'gram'
                var obj = this.obj.to(to).from(from).convert(value)
                var stub = this.stub(obj, 'compute').returns(value)

                obj.value()

                assert.calledOnce(stub, value)
            },

            'returns the computed value': function() {
                var obj = this.obj
                var value = 123
                // var checkStub = this.stub(obj, 'check').returns(true)
                var computeStub = this.stub(obj, '_compute').returns(value)

                obj._to = 'a'
                obj._from = 'b'
                obj._origVal = value

                assert.equals(obj.value(), value)
            }
        },

        'round()': {
            'executes compute method': function() {
                var value = 123
                var from = 'kilogram'
                var to = 'gram'
                var obj = this.obj.to(to).from(from).convert(value)
                var stub = this.stub(obj, 'compute').returns(value)

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
            },

            'returns value when computed value is 0': function(){
                var obj = this.obj
                var value = 0
                var stub = this.stub(obj, '_compute').returns(value)

                obj._origVal = value

                assert.equals(obj.round(), value)
            }
        },

        '_compute()': {
            'throws an error if there are missing properties (_from, _to, or _origVal)': function() {
                var value = 1
                var to = 'gram'
                var from = 'kilogram'
                var obj = this.obj
                var stub = this.stub(obj, 'compute')

                var resetObj = function() {
                    obj._from = undefined
                    obj._origVal = undefined
                    obj._to = undefined
                }

                assert.exception(function() {
                    obj._compute()
                })

                assert.exception(function() {
                    resetObj()
                    obj._to = to
                    obj._compute()
                })

                assert.exception(function() {
                    resetObj()
                    obj._from = from
                    obj._compute()
                })

                assert.exception(function() {
                    resetObj()
                    obj._origVal = value
                    obj._compute()
                })

                assert.exception(function() {
                    resetObj()
                    obj._to = to
                    obj._from = from
                    obj._compute()
                })

                assert.exception(function() {
                    resetObj()
                    obj._to = to
                    obj._origVal = value
                    obj._compute()
                })

                assert.exception(function() {
                    resetObj()
                    obj._from = from
                    obj._origVal = value
                    obj._compute()
                })
            },

            'returns _origVal if _to and _from are equal': function() {
                var str = 'foo'
                var value = 123
                var obj = this.obj

                obj._from = obj._to = str
                obj._origVal = value

                assert.equals(obj._compute(), value)
            }
        },

        'compute()': {
            setUp: function() {
                var defs = this.defs = new definitions
                this.obj.definitions = defs
            },

            'returns a value where the base is the same as the unit being converted to/from': function() {
                var from = 'gram'
                var to = 'kilogram'
                var obj = this.obj
                var defs = this.defs

                defs.set.apply(defs, gram)
                defs.set.apply(defs, kilogram)

                assert.equals(obj.compute(1000, from, to), 1)
                assert.equals(obj.compute(1, to, from), 1000)
            },

            'converts value to base unit before converting to the requested unit if to/from have the same base': function() {
                var from = 'milligram'
                var to = 'kilogram'
                var obj = this.obj
                var defs = this.defs

                var spy = this.spy(obj, 'compute');

                defs.set.apply(defs, gram)
                defs.set.apply(defs, kilogram)
                defs.set.apply(defs, milligram)

                obj.compute(1000, from, to)

                assert.calledWith(spy, 1000, 'milligram', 'gram')
                assert.calledWith(spy, 1, 'gram', 'kilogram')
            },

            'returns false when from/to do not have base to convert from/to': function() {
                var str = 'gram'
                var obj = this.obj
                var defs = this.defs

                defs.set.apply(defs, gram)

                assert.isFalse(obj.compute(1, str, str))
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