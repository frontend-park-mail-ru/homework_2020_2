'use strict';

const inverse = function (arr, to = 0) {
    let res = [];
    if (to >= 0) {
        while (arr.length && to != 0) {
            res.push(arr.shift());
            to--;
        }
        while (arr.length)
            res.push(arr.pop());
    } else {
        while (arr.length && to != 0) {
            res.unshift(arr.pop());
            to++;
        }
        while (arr.length)
            res.unshift(arr.shift());
    }
    return res;
}