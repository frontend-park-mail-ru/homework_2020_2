'use strict';

/**
 * This is a zip function to combine all properties from all objects remaining first property among repeating properties.
 * @param {object[]} objects - Array of objects
 * @return {object} ObjectsProps - Object with properties of all objects
 * @example
 *     zip({age: '42'})
 */

function isValidObject(object) {
    return JSON.stringify(object).match(/\{.*\}/) && typeof object === 'object';
}

const zip = (...objects) => {
    const objectsProps = objects.reduce((iProps, iObject) => {
        try {
            if (isValidObject(iObject)) {
                Object.entries(iObject).forEach(([key, value]) => {
                    if (!iProps.hasOwnProperty(key)) {
                        iProps[key] = value;
                    } 
                });
            }
        } catch(e) {
            // if (e instanceof TypeError){
            //     throw new TypeError('Invalid type');
            // }
            return e;
        }
        return iProps;
    }, {});
    return objectsProps;
};


/*  возможно, оверхэд решение */
// const zip = (...objects) => {
//     const objectsProps = {};
//     objects.reverse(); // реверсируем массив, чтобы в объект было записано первое свойство из повторяющихся
//     objects.forEach((item) => {
//         Object.assign(objectsProps, item); // объединяет свойства объектов с перезаписью свойств
//     });
//     return objectsProps;
// };