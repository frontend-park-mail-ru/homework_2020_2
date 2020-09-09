'use strict';

/**
 * Turns a nested object into an associative array
 * @function plain
 * @param {Object} obj - nasted object.
 * @param {string} str - string with the field name.
 * @returns {Object}
 */
const plain = (obj, str = '') => {
    if (!isObj(obj)) {
        return {};
    }

    let plainifiedObj = {};
    for (const [key, val] of Object.entries(obj)) {
        if (isObj(val)) {
            plainifiedObj = Object.assign(plainifiedObj, plain(val, str + key + '.'));
        } else {
            plainifiedObj[str + key] = val;
        }
    }

    return plainifiedObj;
}

/**
 * Checks whether the variable is an object
 * @function isObj
 * @param {Object} obj - checked variable
 * @returns {boolean}
 */
const isObj = (obj) => {
    return typeof obj === 'object' && obj !== null;
}

/**
 * Turns a nested object into an associative array
 * @function plainify
 * @param {Object} obj - nasted object.
 * @returns {Object}
 */
const plainify = (obj) => {
    return plain(obj);
}
