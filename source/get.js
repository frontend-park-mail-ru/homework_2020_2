'use strict';

/**
 * @description function get() takes 2 arguments: object and string with property
 *              returns the value of property or undefined 
 *
 * @param {object} object, the object of which we want to get a specific property
 * @param {string} property, string that describes the path to property separated by commas
 * @returns {(object|undefined)} if property exists return the value of property, undefined otherwise
 */

const get = (object, property) => {
    if (typeof object !== 'object' || typeof property !== 'string') {
        throw Error('Incorrect type')
    }

    return property.split('.').filter((str) => str).reduce((result, key) =>
        (result && result[key]) ? result[key] : undefined, object);
};
