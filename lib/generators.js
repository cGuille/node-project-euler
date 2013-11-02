(function () {
    'use strict';

    var exports = module.exports = {};

    exports.fibonacci = fibonacci;
    exports.primes = primes;

    function fibonacci() {
        var previous = 0,
            current = 1;

        return function fibonacciGenerator() {
            var next = previous + current;
            previous = current;
            current = next;
            return next;
        };
    }

    /**
     * Create a prime numbers generator, which yeld
     * the next prime number at each call
     * @return {Function} prime numbers generator
     */
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

    /**
     * Check if the given array contains a divisor of the given number
     * @param  {number}           n                 the number to consider
     * @param  {array of number}  potentialDivisors the divisors to test against n
     * @return {Boolean}
     */
    function isDivisibleByOneOf(n, potentialDivisors) {
        return !potentialDivisors.every(function (number) {
            return n % number !== 0;
        });
    }
}());
