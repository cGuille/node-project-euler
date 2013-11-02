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
