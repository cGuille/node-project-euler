#!/usr/bin/env node
(function () {
    'use strict';

    try {
        var fs = require('fs');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }

    var letters = 'a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z'.toUpperCase().split('|'),
        namesString = fs.readFileSync('data/names.txt').toString(),
        nameList = namesString.split(',').map(function (name) {
            return name.slice(1, -1);
        }),
        totalScore;

    nameList.sort();

    console.log(nameList.reduce(function (sum, name, index) {
        return sum + score(name, index + 1);
    }, 0));

    function score(word, position) {
        return position * Array.prototype.reduce.call(word, function (score, letter) {
            return score + letterScore(letter);
        }, 0);
    }

    function letterScore(letter) {
        return letters.indexOf(letter.toUpperCase()) + 1;
    }
}());
