'use strict';

/**
 * This is a zip function to combine all properties from all objects remaining first property among repeating properties.
 * @param {object[]} objects - Array of objects
 * @return {object} ObjectsProps - Object with properties of all objects
 * @example
 *     zip({age: '42'})
 */
const zip = (...objects) =>
    objects.reduce((iProps, iObject) => {
        let isValidObject = (object) =>
            ((String(object)) === ('[object Object]'));
        if (isValidObject(iObject)) {
            Object.entries(iObject).forEach(([key, value]) => {
                if (!iProps.hasOwnProperty(key)) {
                    iProps[key] = value;
                } 
            });
        } else {
            throw new TypeError('Invalid type');
        }
        return iProps;
    }, {});
    