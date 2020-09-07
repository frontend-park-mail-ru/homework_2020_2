'use strict';

/**
 * Plainify for objects.
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
        if (typeof val == 'object'){
            map = Object.assign(map, plain(val, str + key + '.'));
        }
        else{
            map[str+key] = val;
        }
    }

    return map;
}

/**
 * Check type.
 * @function isObj
 * @param {object} obj - object.
 * @returns {boolean}
 */
const isObj = (obj) => {
    if (typeof obj != 'object' || obj == null){
        return false;
    }
    return true;
}

/**
 * Plainify for objects.
 * @function plainify 
 * @param {object} obj - nasted object.
 * @returns {object}
 */
const plainify = (obj) => {
    return plain(obj, '');
}

