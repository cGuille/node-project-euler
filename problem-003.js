#!/usr/bin/env node
(function () {
    'use strict';

    /**
     * Compute the product of every array item
     * @param  {number} (optional) begin index of the first element to compute
     * @param  {number} (optional) end   index of the last element (excluded)
     * @return {number}       the product, or null if empty
     */
    Array.prototype.product = function array_product(begin, end) {
        if (!this.length) {
            return null;
        }
        return this.slice(begin, end).reduce(function (product, item) {
            return product * item;
        });
    };

    try {
        var primes = require('./generators').primes;
    } catch (error) {
        console.error('missing dependency:', error);
        process.exit(1);
    }

    var n = +process.argv[2] || 600851475143,
        primeFactors = [],
        prime = primes(),
        p = -Infinity;

    while (n !== primeFactors.product() && p < n) {
        p = prime();
        if (n % p === 0) {
            primeFactors.push(p);
        }
    }

    console.log(primeFactors, n, primeFactors.product(), n === primeFactors.product());
}());
