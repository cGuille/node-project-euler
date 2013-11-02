(function () {
    'use strict';

    var exports = module.exports = {};

    exports.primes = primes;

    function primes() {
        var primes = [],
            candidate = 2;

        return function primesGenerator() {
            while (isDivisibleByOneOf(candidate, primes)) {
                candidate++;
            }
            primes.push(candidate);
            return candidate;
        };
    }

    function isDivisibleByOneOf(n, potentialDivisors) {
        return !potentialDivisors.every(function (number) {
            return n % number !== 0;
        });
    }
}());
