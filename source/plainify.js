'use strict';

/**
 * Turns a nested object into an associative array
 * @function plain
 * @param {object} obj - nasted object.
 * @param {string} str - string with the field name.
 * @returns {object}
 */
const plain = (obj, str) => {
    if (!isObj(obj)){
        return {};
    }

    let map = {};
    for (const [key, val] of Object.entries(obj)) {
        if (isObj(val)){
            map = Object.assign(map, plain(val, str + key + '.'));
        }
        else{
            map[str+key] = val;
        }
    }

    return map;
}

/**
 * Checks whether the variable is an object
 * @function isObj
 * @param {object} obj - checked variable
 * @returns {boolean}
 */
const isObj = (obj) => {
    return typeof obj === 'object' && obj !== null;
}

/**
 * Turns a nested object into an associative array
 * @function plainify 
 * @param {object} obj - nasted object.
 * @returns {object}
 */
const plainify = (obj) => {
    return plain(obj, '');
}

