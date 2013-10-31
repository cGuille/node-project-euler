#!/usr/bin/env node
(function () {
    'use strict';

    /**
     * Extends the Number prototype, providing a method to check whether the
     * the number is a multiple of the given number or not
     * @param  {number}  multiple
     * @return {Boolean}
     */
    Number.prototype.isMultipleOf = function isMultipleOf(multiple) {
        return (this % multiple) === 0;
    };

    var argv = process.argv.slice(2),
        argc = argv.length;

    if (argc < 3) {
        console.error('Error: this command needs at least 3 arguments.');
        console.error('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <multiple>[ <multiples…>] <from> <to>');
        console.error('Arguments to get the Project Euler answer: "3 5 1 1000".');
        process.exit(1);
    }

    var to = +(argv.pop()),
        from = +(argv.pop()),
        multiples = argv.map(function (arg) { return +arg; });

    console.log(sumOfMultiples(multiples, from, to));

    /**
     * Compute the sum of the natural numbers, starting at `from` and below 
     * `to`, which are multiples of any of the numbers in `multiples`
     * @param  {array of numbers} multiples
     * @param  {number} from
     * @param  {number} to
     * @return {number}
     */
    function sumOfMultiples(multiples, from, to) {
        var sum = 0,
            current;

        for (current = from; current < to; ++current) {
            var addCurrent = multiples.some(function (multiple) {
                return current.isMultipleOf(multiple);
            });

            if (addCurrent) {
                sum += current;
            }
        }

        return sum;
    }
}());
