#!/usr/bin/env node
(function () {
    'use strict';

    var BEGIN = 2, END = 6;

    var x = 1,
        xString,
        products,
        productsAreAnagrams;

    for (; ; ) {
        xString = x.toString();
        products = getProducts(x, BEGIN, END + 1);
        productsAreAnagrams = products.every(function (product) {
            return areAnagrams(xString, product.toString());
        });
        if (productsAreAnagrams) {
            break;
        }
        ++x;
    }

    console.log(x, products);

    /**
     * Get each product of n and every number between `begin` (included)
     * and `end` (excluded)
     * @param  {number} n
     * @param  {number} begin
     * @param  {number} end
     * @return {array}
     */
    function getProducts(n, begin, end) {
        var products = [],
            i;

        for (i = begin; i < end; ++i) {
            products.push(n * i);
        }

        return products;
    }

    /**
     * Check if word1 and word2 are anagrams
     * @param  {string} word1
     * @param  {string} word2
     * @return {boolean}
     */
    function areAnagrams(word1, word2) {
        if (word1.length !== word2.length) {
            return false;
        }

        var stop = false,
            word1 = Array.prototype.slice.call(word1),
            word2 = Array.prototype.slice.call(word2),
            current, word2Index;

        while (word1.length) {
            current = word1[word1.length - 1];
            word2Index = word2.indexOf(current);
            if (word2Index === -1) {
                return false;
            } else {
                word1.pop();
                word2.splice(word2Index, 1);
            }
        }

        return true;
    }
}());
