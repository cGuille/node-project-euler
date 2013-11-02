(function () {
    'use strict';

    // Polyfill for Number.isInteger()
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
    if (!Number.isInteger) {
        Number.isInteger = function isInteger(nVal) {
            return typeof nVal === "number" && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
        };
    }

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
}());
