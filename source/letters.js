'use strict';

const letters = function (str, key) {
    if (key == undefined) {
        return str.split('').filter(function(val, i, str) {
            return str.lastIndexOf(val) === str.indexOf(val);
	}).join("");
    }
    if (key == true) {
        return Array.from(new Set(str)).join("");
    }
    if (key == false) {
        return Array.from(new Set(str.split("").reverse().join(""))).reverse().join("");
    }
    return str;
};

