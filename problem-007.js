#!/usr/bin/env node
(function () {
    'use strict';

    try {
        var primes = require('./generators').primes;
    } catch (error) {
        console.error('missing dependency:', error);
        process.exit(1);
    }

    var n = +process.argv[2] || 10001;

    var prime = primes(),
        p, i;

    for (i = 0; i < n; ++i) {
        p = prime();
    }

    console.log(p);
}());
