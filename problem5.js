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

    if (argc !== 2) {
        console.error('Error: this command needs 2 arguments.');
        console.error('Usage: node problem5.js <from> <to>');
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
