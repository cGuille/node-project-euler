#!/usr/bin/env node
(function () {
    'use strict';

    try {
        require('./lib/proto.js');
        var fibonacci = require('./lib/generators').fibonacci();
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }

    var argv = process.argv.slice(2),
        argc = argv.length;

    if (argc !== 1) {
        console.error('Error: this command needs 1 argument.');
        console.error('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <limit>');
        console.error('Arguments to get the Project Euler answer: "4000000".');
        process.exit(1);
    }

    var limit = +(argv.pop());

    console.log(sumOfEvenFibonacciBelow(limit));

    /**
     * Compute the sum of the fibonacci numbers that are even and below the
     * given limit
     * @param  {number} limit
     * @return {number}
     */
    function sumOfEvenFibonacciBelow(limit) {
        var sum = 0,
            f = fibonacci();

        while (f < limit) {
            if (f.isMultipleOf(2)) {
                sum += f;
            }
            f = fibonacci();
        }

        return sum;
    }
}());
