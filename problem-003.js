#!/usr/bin/env node
(function () {
    'use strict';

    try {
        require('./lib/proto.js');
        var primes = require('./lib/generators').primes;
    } catch (error) {
        console.error(error.message);
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
