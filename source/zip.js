'use strict';

/**
 * @returns {Object} - the object with properties of all passed objects
 * @param {...Object} - objects array
 */
function zip(...args) {
    return args.reverse().reduce((acc, obj) => {
        if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach(key => acc[key] = obj[key]);
        }
        return acc;
    }, {});
}

