#!/usr/bin/env node
(function () {
    'use strict';

    // Polyfill for Number.isInteger()
    if (!Number.isInteger) {
        Number.isInteger = function isInteger (nVal) {
            return typeof nVal === "number" && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
        };
    }

    var i, j,
        limit = 1000;

    for (i = 1; i < limit; ++i) {
        for (j = i + 1; j < limit; ++j) {
            var candidate = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
            if (Number.isInteger(candidate)) {
                if (i + j + candidate === 1000) {
                    console.log('a:', i);
                    console.log('b:', j);
                    console.log('c:', candidate);
                    console.log('abc:', i * j * candidate);
                    process.exit();
                }
            }
        }
    }
}());
