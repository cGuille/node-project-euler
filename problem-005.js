#!/usr/bin/env node
(function () {
    'use strict';

    try {
        require('./lib/proto.js');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }

    var argv = process.argv.slice(2),
        argc = argv.length;

    if (argc !== 2) {
        console.error('Error: this command needs 2 arguments.');
        console.error('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <from> <to>');
        console.error('Arguments to get the Project Euler answer: "1 20".');
        process.exit(1);
    }

    var to = +(argv.pop()),
        from = +(argv.pop());

    console.log(smallestPositiveNumberEvenlyDivisibleByNumbers(from, to));

    function smallestPositiveNumberEvenlyDivisibleByNumbers(from, to) {
        var current = 0,
            divisors = [],
            found = false;

        for (var i = from; i <= to; ++i) {
            divisors.push(i);
        }

        while (!found) {
            current++;
            found = divisors.every(function (divisor) {
                return current.isMultipleOf(divisor);
            });
        }

        return current;
    }
}());
