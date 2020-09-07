'use strict';

const sorting = function (numbers, keys) {
    if (!Array.isArray(numbers)) {
        return [];
    }
    if (!Array.isArray(keys)) {
        return numbers;
    }
    keys.reverse().forEach(element => {
        if (typeof numbers[0][element] === "number") {
            numbers.sort(function (a, b) {
                return a[element] - b[element];
            })
        } else {
            numbers.sort(function (a, b) {
                if (a[element].length > b[element].length) {
                    return -1;
                }
                if (a[element].length < b[element].length) {
                    return 1;
                }
                return a[element] - b[element];
            });
        }
    })
    return numbers;
};