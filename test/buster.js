'use strict'

var config = module.exports;

config['Mitiri Tests'] = {
    rootPath: '../',
    environment: 'node',
    sources: [
        '*.js',
        'api/**',
        'area/**',
        'definition/**',
        'distance/**',
        'mass/**',
        'pressure/**',
        'speed/**',
        'temperature/**',
        'time/**',
        'volume/**'
    ],
    tests: [
        'test/*-test.js'
    ],
    extensions: [
        require('buster-istanbul')
    ],
    'buster-istanbul': {
        outputDirectory: 'coverage',
        format: 'lcov'
    }
}
