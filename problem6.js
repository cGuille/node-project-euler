#!/usr/bin/env node
(function () {
    'use strict';

    var argv = process.argv.slice(2),
        argc = argv.length;

    if (argc !== 1) {
        console.error('Error: this command needs 1 argument.');
        console.error('Usage: node problem6.js <limit>');
        process.exit(1);
    }

    var limit = +(argv.pop()),
        numbers = [];

    for (var i = 1; i <= limit; ++i) {
        numbers.push(i);
    }

    var squareOfSum = Math.pow(numbers.reduce(function (sum, number) {
            return sum + number;
        }), 2);

    var sumOfSquares = numbers.reduce(function (sum, number) {
            return sum + Math.pow(number, 2);
        }, 0);

    console.log(Math.abs(sumOfSquares - squareOfSum));
}());
