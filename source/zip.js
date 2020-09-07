'use strict';

/**
 * This is a zip function to combine all properties from all objects remaining first property among repeating properties.
 * @param {object[]} objects - Array of objects
 * @return {object} ObjectsProps - Object with properties of all objects
 * @example
 *     zip({age: '42'})
 */

function isValidObject(object) {
    return String(object) === "[object Object]";

const zip = (...objects) => {
    const objectsProps = objects.reduce((iProps, iObject) => {
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
    return objectsProps;
};


/*  возможно, оверхэд решение */
// const zip = (...objects) => {
//     const objectsProps = {};
//     objects.reverse(); // реверсируем массив, чтобы в объект было записано первое свойство из повторяющихся
//     objects.forEach((iObject) => {
//         if (isValidObject(iObject)) {
//             Object.assign(objectsProps, iObject); // объединяет свойства объектов с перезаписью свойств
//         } else {
//             throw new TypeError('Invalid type');
//         }
//     });
//     return objectsProps;
// };