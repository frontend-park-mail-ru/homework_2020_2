'use strict';

/**
 * @description function get() gets 2 parameters: object (the object we wanna explore) and
 * path_to_prop (the path to the properties we wanna get)
 * returning value: function returns value of properties or undefined in case properties doesn't exist
 *
 * @param {object} object - The object we wanna explore
 * @param {string} path_to_prop - The path to the properties we wanna get
 * @returns {object}
 * */

const get = (object, path_to_prop) => {
    if (!(typeof object === 'object' && typeof path_to_prop === 'string')) {
        throw Error('Некорректный тип входных данных');
    }

    return path_to_prop.split('.')
        .filter(prop => prop)
        .reduce((accumulator, property) =>
            accumulator ? accumulator[property] : undefined, object);
};
