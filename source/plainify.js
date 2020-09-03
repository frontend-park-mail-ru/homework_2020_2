'use strict';

/**
 * Plainify for objects.
 * @function plain
 * @param {object} obj - nasted object.
 * @param {string} str - string with the field name.
 * @returns {object}
 */
const plain = (obj, str) => {
    if (typeof obj != 'object' || obj == null){
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
 * Plainify for objects.
 * @function plainify 
 * @param {object} obj - nasted object.
 * @returns {object}
 */
const plainify = (obj) => {
    return plain(obj, '');
}

