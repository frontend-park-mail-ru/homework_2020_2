'use strict'

/**
 * Устанавливает значение во вложенном свойстве объекта
 * @param {object} object объект, вложенное свойство которого требуется изменить 
 * @param {string} path строка, содержащая путь к свойству
 * @param {*} value значение, которое требуется установить
 * @returns {object} объект, с изменённым вложенным свойством 
 */
const set = (object, path, value) => {
    const properties = path.split('.').slice(1)
    let curentObject = object
    properties.forEach((property, index) => {
        const isLast = index === properties.length - 1
        if (isLast) {
            curentObject[property] = value
        }
        if (!curentObject.hasOwnProperty(property)) {
            curentObject[property] = {}
        }
        curentObject = curentObject[property]
    });
    return object
}
