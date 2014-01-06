var buster = require('buster')

var temperature = require('../temperature')
// Load the definitions I want
require('../definition/temperature/celsius')
require('../definition/temperature/delisle')
require('../definition/temperature/fahrenheit')
require('../definition/temperature/kelvin')
require('../definition/temperature/newton')
require('../definition/temperature/rankine')
require('../definition/temperature/reaumur')
require('../definition/temperature/romer')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

var conversion = function(from, to, value, expected, fixed) {
    return function() {
        var obj = this.obj
        var actual = obj.from(from).to(to).convert(value).value()

        if (fixed != undefined) {
            actual = parseFloat(actual.toFixed(fixed))
        }

        assert.equals(actual, expected)
    }
}

testCase('temperature', {
    setUp: function() {},

    'is a function': function() {
        assert.isFunction(temperature)
    },

    'returns an object': function() {
        assert.isObject(temperature())
    },

    'contains definitions': function() {
        var definition = temperature()._definition

        assert.defined(definition.kelvin)
        assert.defined(definition.celsius)
    },

    'convert': {
        setUp: function() {
            this.obj = temperature()
        },

        'celsius': {
            '-> celsius': conversion('celsius', 'celsius', 1, 1),

            '-> delisle': conversion('celsius', 'delisle', 1, 148.50000000000006),

            '-> fahrenheit': conversion('celsius', 'fahrenheit', 1, 33.7999999999999),

            '-> kelvin': conversion('celsius', 'kelvin', 1, 274.15),

            '-> newton': conversion('celsius', 'newton', 1, 0.3299999999999983),

            '-> rankine': conversion('celsius', 'rankine', 1, 493.4699999999999),

            '-> reaumur': conversion('celsius', 'reaumur', 1, 0.799999999999983),

            '-> romer': conversion('celsius', 'romer', 1, 8.025000000000006)
        },

        'delisle': {
            '-> celsius': conversion('delisle', 'celsius', 1, 99.33333333333337),

            '-> delisle': conversion('delisle', 'delisle', 1, 1),

            '-> fahrenheit': conversion('delisle', 'fahrenheit', 1, 210.8),

            '-> kelvin': conversion('delisle', 'kelvin', 1, 372.48333333333335),

            '-> newton': conversion('delisle', 'newton', 1, 32.78),

            '-> rankine': conversion('delisle', 'rankine', 1, 670.47),

            '-> reaumur': conversion('delisle', 'reaumur', 1, 79.46666666666667),

            '-> romer': conversion('delisle', 'romer', 1, 59.650000000000006)
        },

        'fahrenheit': {
            '-> celsius': conversion('fahrenheit', 'celsius', 33.7999999999999, 1),

            '-> delisle': conversion('fahrenheit', 'delisle', 1, 175.83333333333331),

            '-> fahrenheit': conversion('fahrenheit', 'fahrenheit', 1, 1),

            '-> kelvin': conversion('fahrenheit', 'kelvin', -423.67, 20),

            '-> newton': conversion('fahrenheit', 'newton', 1, -5.683333333333323),

            '-> rankine': conversion('fahrenheit', 'rankine', 1, 460.67),

            '-> reaumur': conversion('fahrenheit', 'reaumur', 1, -13.777777777777771),

            '-> romer': conversion('fahrenheit', 'romer', 1, -1.5416666666666572)
        },

        'kelvin': {
            '-> celsius': conversion('kelvin', 'celsius', 1, -272.15),

            '-> delisle': conversion('kelvin', 'delisle', 1, 558.225),

            '-> fahrenheit': conversion('kelvin', 'fahrenheit', 1, -457.87),

            '-> kelvin': conversion('kelvin', 'kelvin', 1, 1),

            '-> newton': conversion('kelvin', 'newton', 1, -89.8095),

            '-> rankine': conversion('kelvin', 'rankine', 1, 1.7999999999999998),

            '-> reaumur': conversion('kelvin', 'reaumur', 1, -217.72),

            '-> romer': conversion('kelvin', 'romer', 1, -135.37875)
        },

        'newton': {
            '-> celsius': conversion('newton', 'celsius', 1, 3.0303030303030596),

            '-> delisle': conversion('newton', 'delisle', 1, 145.45454545454544),

            '-> fahrenheit': conversion('newton', 'fahrenheit', 1, 37.45454545454544),

            '-> kelvin': conversion('newton', 'kelvin', 1, 276.18030303030304),

            '-> newton': conversion('newton', 'newton', 1, 1),

            '-> rankine': conversion('newton', 'rankine', 1, 497.12454545454545),

            '-> reaumur': conversion('newton', 'reaumur', 1, 2.424242424242408),

            '-> romer': conversion('newton', 'romer', 1, 9.090909090909093)
        },

        'rankine': {
            '-> celsius': conversion('rankine', 'celsius', 1, -272.59444444444443),

            '-> delisle': conversion('rankine', 'delisle', 1, 558.8916666666667),

            '-> fahrenheit': conversion('rankine', 'fahrenheit', 1, -458.67),

            '-> kelvin': conversion('rankine', 'kelvin', 1, 0.5555555555555556),

            '-> newton': conversion('rankine', 'newton', 1, -89.95616666666666),

            '-> rankine': conversion('rankine', 'rankine', 1, 1),

            '-> reaumur': conversion('rankine', 'reaumur', 1, -218.07555555555555),

            '-> romer': conversion('rankine', 'romer', 1, -135.61208333333335)
        },

        'reaumur': {
            '-> celsius': conversion('reaumur', 'celsius', 1, 1.2500000000000568),

            '-> delisle': conversion('reaumur', 'delisle', 1, 148.12499999999994),

            '-> fahrenheit': conversion('reaumur', 'fahrenheit', 1, 34.25),

            '-> kelvin': conversion('reaumur', 'kelvin', 1, 274.40000000000003),

            '-> newton': conversion('reaumur', 'newton', 1, 0.4125000000000085),

            '-> rankine': conversion('reaumur', 'rankine', 1, 493.92),

            '-> reaumur': conversion('reaumur', 'reaumur', 1, 1),

            '-> romer': conversion('reaumur', 'romer', 1, 8.156250000000028)
        },

        'romer': {
            '-> celsius': conversion('romer', 'celsius', 1, -12.380952380952351),

            '-> delisle': conversion('romer', 'delisle', 1, 168.57142857142856),

            '-> fahrenheit': conversion('romer', 'fahrenheit', 1, 9.714285714285666),

            '-> kelvin': conversion('romer', 'kelvin', 1, 260.7690476190476),

            '-> newton': conversion('romer', 'newton', 1, -4.085714285714275),

            '-> rankine': conversion('romer', 'rankine', 1, 469.3842857142857),

            '-> reaumur': conversion('romer', 'reaumur', 1, -9.904761904761898),

            '-> romer': conversion('romer', 'romer', 1, 1)
        }
    }
})