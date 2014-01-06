var buster = require('buster')

var mass = require('../mass')
// Load the definitions I want
require('../definition/mass/gram')
require('../definition/mass/kilogram')
require('../definition/mass/long-ton')
require('../definition/mass/microgram')
require('../definition/mass/metric-ton')
require('../definition/mass/milligram')
require('../definition/mass/ounce')
require('../definition/mass/pound')
require('../definition/mass/short-ton')
require('../definition/mass/stone')

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

testCase('mass', {
    setUp: function() {},

    'is a function': function() {
        assert.isFunction(mass)
    },

    'returns an object': function() {
        assert.isObject(mass())
    },

    'contains definitions': function() {
        var definition = mass()._definition

        assert.defined(definition.gram)
        assert.defined(definition.kilogram)
    },

    'convert': {
        setUp: function() {
            this.obj = mass()
        },

        'gram': {
            '-> gram': conversion('gram', 'gram', 1, 1),

            '-> kilogram': conversion('gram', 'kilogram', 1000, 1),

            '-> long-ton': conversion('gram', 'long-ton', 1 / 9.8420653E-7, 1),

            '-> microgram': conversion('gram', 'microgram', 1E-6, 1),

            '-> metric-ton': conversion('gram', 'metric-ton', 1E6, 1),

            '-> milligram': conversion('gram', 'milligram', 1 / 1E3, 1),

            '-> ounce': conversion('gram', 'ounce', 1 / .035273962, 1),

            '-> pound': conversion('gram', 'pound', 1 / 2.2046226E-3, 1),

            '-> short-ton': conversion('gram', 'short-ton', 1 / 1.1023113E-6, 1),

            '-> stone': conversion('gram', 'stone', 1 / 1.5747304E-4, 1)
        },

        'kilogram': {
            '-> gram': conversion('kilogram', 'gram', 1, 1E3),

            '-> kilogram': conversion('kilogram', 'kilogram', 1000, 1000),

            '-> long-ton': conversion('kilogram', 'long-ton', 1, 0.00098420653),

            '-> microgram': conversion('kilogram', 'microgram', 1E-9, 1.0000000000000002),

            '-> metric-ton': conversion('kilogram', 'metric-ton', 1, 0.001),

            '-> milligram': conversion('kilogram', 'milligram', 1E-6, 1),

            '-> ounce': conversion('kilogram', 'ounce', 1, 35.273962),

            '-> pound': conversion('kilogram', 'pound', 1, 2.2046226),

            '-> short-ton': conversion('kilogram', 'short-ton', 1, 0.0011023113),

            '-> stone': conversion('kilogram', 'stone', 1, 0.15747303999999998)
        },

        'long-ton': {
            '-> gram': conversion('long-ton', 'gram', 1, 1016046.9063337753),

            '-> kilogram': conversion('long-ton', 'kilogram', 1, 1016.0469063337753),

            '-> long-ton': conversion('long-ton', 'long-ton', 1, 1),

            '-> microgram': conversion('long-ton', 'microgram', 1, 1016046906333.7753),

            '-> metric-ton': conversion('long-ton', 'metric-ton', 1, 1.0160469063337754),

            '-> milligram': conversion('long-ton', 'milligram', 1, 1016046906.3337753),

            '-> ounce': conversion('long-ton', 'ounce', 1, 35839.99996423515),

            '-> pound': conversion('long-ton', 'pound', 1, 2239.999972363524),

            '-> short-ton': conversion('long-ton', 'short-ton', 1, 1.119999986181762),

            '-> stone': conversion('long-ton', 'stone', 1, 159.99999512297484),
        },

        'microgram': {
            '-> gram': conversion('microgram', 'gram', 1, .000001),

            '-> kilogram': conversion('microgram', 'kilogram', 1, 9.999999999999999e-10),

            '-> long-ton': conversion('microgram', 'long-ton', 1, 9.8420653e-13),

            '-> microgram': conversion('microgram', 'microgram', 1, 1),

            '-> metric-ton': conversion('microgram', 'metric-ton', 1, 1E-12),

            '-> milligram': conversion('microgram', 'milligram', 1000, 1),

            '-> ounce': conversion('microgram', 'ounce', 1, 3.5273961999999997e-8),

            '-> pound': conversion('microgram', 'pound', 1, 2.2046225999999998e-9),

            '-> short-ton': conversion('microgram', 'short-ton', 1, 1.1023113e-12),

            '-> stone': conversion('microgram', 'stone', 1, 1.5747303999999997e-10),
        },

        'metric-ton': {
            '-> gram': conversion('metric-ton', 'gram', 1, 1000000),

            '-> kilogram': conversion('metric-ton', 'kilogram', 1, 1000),

            '-> long-ton': conversion('metric-ton', 'long-ton', 1, 0.98420653),

            '-> microgram': conversion('metric-ton', 'microgram', 1, 1000000000000),

            '-> metric-ton': conversion('metric-ton', 'metric-ton', 1, 1),

            '-> milligram': conversion('metric-ton', 'milligram', .000001, 1000),

            '-> ounce': conversion('metric-ton', 'ounce', 1, 35273.962),

            '-> pound': conversion('metric-ton', 'pound', 1, 2204.6226),

            '-> short-ton': conversion('metric-ton', 'short-ton', 1, 1.1023113),

            '-> stone': conversion('metric-ton', 'stone', 1, 157.47304),
        },

        'milligram': {
            '-> gram': conversion('milligram', 'gram', 1, 0.001),

            '-> kilogram': conversion('milligram', 'kilogram', 1, 0.000001),

            '-> long-ton': conversion('milligram', 'long-ton', 1, 9.842065300000001e-10),

            '-> microgram': conversion('milligram', 'microgram', 1, 1000.0000000000001),

            '-> metric-ton': conversion('milligram', 'metric-ton', 1, 1e-9),

            '-> milligram': conversion('milligram', 'milligram', 1, 1),

            '-> ounce': conversion('milligram', 'ounce', 1, 0.000035273962),

            '-> pound': conversion('milligram', 'pound', 1, 0.0000022046226),

            '-> short-ton': conversion('milligram', 'short-ton', 1, 1.1023112999999999e-9),

            '-> stone': conversion('milligram', 'stone', 1, 1.5747303999999998e-7),
        },

        'ounce': {
            '-> gram': conversion('ounce', 'gram', 1, 28.349523084478008),

            '-> kilogram': conversion('ounce', 'kilogram', 1, 0.02834952308447801),

            '-> long-ton': conversion('ounce', 'long-ton', 1, 0.000027901785742128998),

            '-> microgram': conversion('ounce', 'microgram', 1, 28349523.08447801),

            '-> metric-ton': conversion('ounce', 'metric-ton', 1, 0.000028349523084478007),

            '-> milligram': conversion('ounce', 'milligram', 1, 28349.52308447801),

            '-> ounce': conversion('ounce', 'ounce', 1, 1),

            '-> pound': conversion('ounce', 'pound', 1, 0.062499999291261925),

            '-> short-ton': conversion('ounce', 'short-ton', 1, 0.00003124999964563096),

            '-> stone': conversion('ounce', 'stone', 1, 0.0044642855826629285),
        },

        'pound': {
            '-> gram': conversion('pound', 'gram', 1, 453.5923744952991),

            '-> kilogram': conversion('pound', 'kilogram', 1, 0.4535923744952991),

            '-> long-ton': conversion('pound', 'long-ton', 1, 0.00044642857693647886),

            '-> microgram': conversion('pound', 'microgram', 1, 453592374.49529916),

            '-> metric-ton': conversion('pound', 'metric-ton', 1, 0.0004535923744952991),

            '-> ounce': conversion('pound', 'ounce', 1, 16.00000018143695),

            '-> pound': conversion('pound', 'pound', 1, 1),

            '-> short-ton': conversion('pound', 'short-ton', 1, 0.0005),

            '-> stone': conversion('pound', 'stone', 1, 0.07142857013259321)
        },

        'short-ton': {
            '-> gram': conversion('short-ton', 'gram', 1, 907184.7489905983),

            '-> kilogram': conversion('short-ton', 'kilogram', 1, 907.1847489905982),

            '-> long-ton': conversion('short-ton', 'long-ton', 1, 0.8928571538729577),

            '-> microgram': conversion('short-ton', 'microgram', 1, 907184748990.5983),

            '-> metric-ton': conversion('short-ton', 'metric-ton', 1, 0.9071847489905982),

            '-> milligram': conversion('short-ton', 'milligram', 1, 907184748.9905982),

            '-> ounce': conversion('ounce', 'ounce', 1, 1),

            '-> pound': conversion('short-ton', 'pound', 1, 2000),

            '-> short-ton': conversion('short-ton', 'short-ton', 1, 1),

            '-> stone': conversion('short-ton', 'stone', 1, 142.85714026518642),
        },

        'stone': {            
            '-> gram': conversion('stone', 'gram', 1, 6350.293358151974),

            '-> kilogram': conversion('stone', 'kilogram', 1, 6.350293358151974),

            '-> long-ton': conversion('stone', 'long-ton', 1, 0.006250000190508802),

            '-> microgram': conversion('stone', 'microgram', 1, 6350293358.151974),

            '-> metric-ton': conversion('stone', 'metric-ton', 1, 0.006350293358151974),

            '-> ounce': conversion('stone', 'ounce', 1, 224.0000066043051),

            '-> pound': conversion('stone', 'pound', 1, 14.000000254011736),

            '-> short-ton': conversion('stone', 'short-ton', 1, 0.007000000127005868),

            '-> stone': conversion('stone', 'stone', 1, 1)
        }
    }
})