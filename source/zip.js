'use strict';

function zip(...args) {
    return args.reverse().reduce((acc, obj) => {
        if (typeof obj === "object") {
            Object.keys(obj).forEach(key => acc[key] = obj[key]);
        }
        return acc;
    }, {});
}

