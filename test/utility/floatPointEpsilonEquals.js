'use strict'

module.exports = function(x, y) {
    // return (Math.abs(x - y) < 2.2204460492503130808472633361816E-16)
    // console.log(x, y, Math.abs(x-y) < 0.000001)
    return (Math.abs(x - y) < 1e-6)
}