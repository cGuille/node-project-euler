#!/usr/bin/env node
(function () {
    'use strict';

    try {
        require('./lib/proto.js');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }

    var i, j,
        limit = 900,
        candidates = [];

    for (i = 999; i >= limit; --i) {
        for (j = 999; j >= limit; --j) {
            candidates.push({ number: i * j, origin: [i, j] });
        }
    }

    candidates.sort(function (a, b) {
        return a.number - b.number;
    }).reverse();
    // console.log(candidates);

    for (i = 0; i < candidates.length; ++i) {
        if (isPalindrome(candidates[i].number.toString())) {
            console.log(candidates[i]);
            break;
        }
    }

    /**
     * Check whether the given string is a palindrome or not
     * @param  {string}  str the string to check
     * @return {Boolean}
     */
    function isPalindrome(str) {
        var middleIndex = str.length / 2,
            leftSlice, rightSlice, middle;

        leftSlice = Array.prototype.slice.call(str, 0, middleIndex);
        
        if (str.length.isMultipleOf(2)) {
            rightSlice = Array.prototype.slice.call(str, middleIndex);
        } else {
            rightSlice = Array.prototype.slice.call(str, middleIndex + 1);
            middle = str.charAt(middleIndex);
        }

        return middle === middle && leftSlice.equals(rightSlice.reverse());
    }
}());
