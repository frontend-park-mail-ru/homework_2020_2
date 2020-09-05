'use strict';

/**
 * This is a zip function to combine all properties from all objects remaining first property among repeating properties.
 *
 * @param {object[]} objects - Array of objects
 * @return {object} ObjectsProps - Object with properties of all objects
 *
 * @example
 *
 *     zip({age: '42'})
 */


const zip = (...objects) => {
    let ObjectsProps = {};
    objects.forEach((object_i) => {
        if (!(object_i === null)) {
            Object.entries(object_i).forEach((property) => {                
                if (!(property[0] in ObjectsProps)) {
                    ObjectsProps[property[0]] = property[1];
                }
            });
        }
    });
    return ObjectsProps;
};


// возможно, оверхэд решение
// const zip = (...objects) => {
//     let BigObject = {};
//     objects.reverse(); // реверсируем массив, чтобы в объект было записано первое свойство из повторяющихся
//     objects.forEach((item) => {
//         Object.assign(BigObject, item); // объединяет свойства объектов с перезаписью свойств
//     });
//     return BigObject;
// };