#!/usr/bin/env node
(function () {
    'use strict';

    try {
        var moment = require('moment');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }

    var startDate = moment('1901-01-01'),
        stopDate = moment('2000-12-31'),
        currentDate = startDate,
        total = 0;

    while (currentDate <= stopDate) {
        if (currentDate.day() === 0) {// With momentjs, zero is sunday
            ++total;
        }
        currentDate.add('months', 1);
    }

    console.log(total);
}());
