'use strict';

function zip(...args) {
    var new_obj = {};

    /* 

    If we wanted to copy not enumerable fields we would use this code

    args.map(arg => Object.getOwnPropertyNames(arg).map(function(key) {
        if (!new_obj.hasOwnProperty(key)) {
            new_obj[key] = arg[key];
        }
    }));

    */

    args.map(arg => Object.keys(arg).map(function(key) {
        if (!new_obj.hasOwnProperty(key)) {
            new_obj[key] = arg[key];
        }
    }));

    return new_obj;
}
