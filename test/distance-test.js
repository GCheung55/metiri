var buster = require('buster')

var distance = require('../distance')
// Load the definitions I want
require('../definition/distance/angstrom')
require('../definition/distance/barleycorn')
require('../definition/distance/centimeter')
require('../definition/distance/chain')
require('../definition/distance/cubit')
require('../definition/distance/decimeter')
require('../definition/distance/digit')
require('../definition/distance/ell')
require('../definition/distance/fathom')
require('../definition/distance/finger')
require('../definition/distance/foot')
require('../definition/distance/furlong')
require('../definition/distance/hand')
require('../definition/distance/inch')
require('../definition/distance/kilometer')
require('../definition/distance/league')
require('../definition/distance/line')
require('../definition/distance/link')
require('../definition/distance/meter')
require('../definition/distance/microinch')
require('../definition/distance/micrometer')
require('../definition/distance/mil')
require('../definition/distance/mile')
require('../definition/distance/millimeter')
require('../definition/distance/nail')
require('../definition/distance/nanometer')
// require('../definition/distance/nautical-mile')
require('../definition/distance/palm')
require('../definition/distance/perch')
require('../definition/distance/rod')
require('../definition/distance/span')
require('../definition/distance/survey-foot')
require('../definition/distance/yard')

var assert = buster.assert
var refute = buster.refute
var testCase = buster.testCase

var conversion = function(from, to, value, expected, fixed) {
    return function() {
        var obj = this.obj
        var actual = obj.from(from).to(to).convert(value).value()
// console.log(actual, to)
        if (fixed != undefined) {
            actual = parseFloat(actual.toFixed(fixed))
        }

        assert.equals(actual, expected)
// assert.equals(actual, actual)
    }
}

testCase('distance', {
    setUp: function() {},

    'is a function': function() {
        assert.isFunction(distance)
    },

    'returns an object': function() {
        assert.isObject(distance())
    },

    'contains definitions': function() {
        var definition = distance()._definition

        assert.defined(definition.centimeter)
        assert.defined(definition.meter)
    },

    'convert': {
        setUp: function() {
            this.obj = distance()
        },

        'angstrom': {
            '-> angstrom': conversion('angstrom', 'angstrom', 1, 1),

            '-> barleycorn': conversion('angstrom', 'barleycorn', 1, 1.1811024000000002e-8),

            '-> centimeter': conversion('angstrom', 'centimeter', 1, 1e-8),

            '-> chain': conversion('angstrom', 'chain', 1, 4.970969500000001e-12),

            '-> cubit': conversion('angstrom', 'cubit', 1, 2.1872266000000003e-10),

            '-> decimeter': conversion('angstrom', 'decimeter', 1, 1e-9),

            '-> digit': conversion('angstrom', 'digit', 1, 5.007511300000001e-9 ),

            '-> ell': conversion('angstrom', 'ell', 1, 8.748906399999999e-11),

            '-> fathom': conversion('angstrom', 'fathom', 1, 5.468066500000001e-11),

            '-> finger': conversion('angstrom', 'finger', 1, 4.4994376e-9),

            '-> foot': conversion('angstrom', 'foot', 1, 3.2808399000000006e-10),

            '-> furlong': conversion('angstrom', 'furlong', 1, 4.9709695e-13),

            '-> hand': conversion('angstrom', 'hand', 1, 9.8425197e-10),

            '-> inch': conversion('angstrom', 'inch', 1, 3.9370079e-9),

            '-> kilometer': conversion('angstrom', 'kilometer', 1, 1e-13),

            '-> league': conversion('angstrom', 'league', 1, 2.0712373e-14),

            '-> line': conversion('angstrom', 'line', 1, 4.7244094e-8),

            '-> link': conversion('angstrom', 'link', 1, 4.9709695e-10),

            '-> meter': conversion('angstrom', 'meter', 1, 1e-10),

            '-> microinch': conversion('angstrom', 'microinch', 1, 0.0039370079),

            '-> micrometer': conversion('angstrom', 'micrometer', 1, 0.00009999999999999999),

            '-> mil': conversion('angstrom', 'mil', 1, 0.0000039370079),

            '-> mile': conversion('angstrom', 'mile', 1, 6.213711900000001e-14 ),

            '-> millimeter': conversion('angstrom', 'millimeter', 1, 1e-7),

            '-> nail': conversion('angstrom', 'nail', 1, 1.7497813000000001e-9),

            '-> nanometer': conversion('angstrom', 'nanometer', 1, 0.1),

            '-> palm': conversion('angstrom', 'palm', 1, 1.312336e-9),

            '-> perch': conversion('angstrom', 'perch', 1, 1.9883878000000003e-11),

            '-> rod': conversion('angstrom', 'rod', 1, 1.9883878000000003e-11),

            '-> span': conversion('angstrom', 'span', 1, 4.3744532000000006e-10),

            '-> survey-foot': conversion('angstrom', 'survey-foot', 1, 3.2808333e-10),

            '-> yard': conversion('angstrom', 'yard', 1, 1.0936133000000002e-10)
        },

        'centimeter': {
            '-> foot': conversion('centimeter', 'foot', 1, 0.032808399),

            '-> inch': conversion('centimeter', 'inch', 1, 0.39370079),

            '-> kilometer': conversion('centimeter', 'kilometer', 1, 0.00001),

            '-> meter': conversion('centimeter', 'meter', 1, 0.01),

            '-> mile': conversion('centimeter', 'mile', 1, 0.0000062137119),

            '-> millimeter': conversion('centimeter', 'millimeter', 1, 10),

            // '-> nautical-mile': conversion('centimeter', 'nautical-mile', 1, 0.000005399568),

            '-> yard': conversion('centimeter', 'yard', 1, 0.010936133)
        },

        'meter': {
            '-> centimeter': conversion('meter', 'centimeter', 0.01, 1)
        }
    }
})

/*
            '-> angstrom': conversion('<from>', 'angstrom', 1, 0.032808399),

            '-> barleycorn': conversion('<from>', 'barleycorn', 1, 0.032808399),

            '-> centimeter': conversion('<from>', 'centimeter', 1, 0.032808399),

            '-> chain': conversion('<from>', 'chain', 1, 0.032808399),

            '-> cubit': conversion('<from>', 'cubit', 1, 0.032808399),

            '-> decimeter': conversion('<from>', 'decimeter', 1, 0.032808399),

            '-> digit': conversion('<from>', 'digit', 1, 0.032808399),

            '-> ell': conversion('<from>', 'ell', 1, 0.032808399),

            '-> fathom': conversion('<from>', 'fathom', 1, 0.032808399),

            '-> finger': conversion('<from>', 'finger', 1, 0.032808399),

            '-> foot': conversion('<from>', 'foot', 1, 0.032808399),

            '-> furlong': conversion('<from>', 'furlong', 1, 0.032808399),

            '-> hand': conversion('<from>', 'hand', 1, 0.032808399),

            '-> inch': conversion('<from>', 'inch', 1, 0.032808399),

            '-> kilometer': conversion('<from>', 'kilometer', 1, 0.032808399),

            '-> league': conversion('<from>', 'league', 1, 0.032808399),

            '-> line': conversion('<from>', 'line', 1, 0.032808399),

            '-> link': conversion('<from>', 'link', 1, 0.032808399),

            '-> meter': conversion('<from>', 'meter', 1, 0.032808399),

            '-> microinch': conversion('<from>', 'microinch', 1, 0.032808399),

            '-> micrometer': conversion('<from>', 'micrometer', 1, 0.032808399),

            '-> mil': conversion('<from>', 'mil', 1, 0.032808399),

            '-> mile': conversion('<from>', 'mile', 1, 0.032808399),

            '-> millimeter': conversion('<from>', 'millimeter', 1, 0.032808399),

            '-> nail': conversion('<from>', 'nail', 1, 0.032808399),

            '-> nanometer': conversion('<from>', 'nanometer', 1, 0.032808399),

            '-> palm': conversion('<from>', 'palm', 1, 0.032808399),

            '-> perch': conversion('<from>', 'perch', 1, 0.032808399),

            '-> rod': conversion('<from>', 'rod', 1, 0.032808399),

            '-> span': conversion('<from>', 'span', 1, 0.032808399),

            '-> survey-foot': conversion('<from>', 'survey-foot', 1, 0.032808399),

            '-> yard': conversion('<from>', 'yard', 1, 0.032808399)
 */