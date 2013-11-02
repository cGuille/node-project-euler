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

    /**
     * Check whether the content of the array is equal to the content of another
     * @param  {array} otherArray 
     * @param  {function} (optional) equalityTest(arrayItem, otherArrayItem): boolean
     * @return {boolean}
     */
    Array.prototype.equals = function array_equals(otherArray, equalityTest) {
        if (this.length !== otherArray.length) {
            return false;
        }

        if (!equalityTest) {
            equalityTest = function strictEquality(a, b) { return a === b; };
        }

        return this.every(function (item, index) {
            return equalityTest(item, otherArray[index]);
        });
    };

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
