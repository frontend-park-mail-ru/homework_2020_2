'use strict';

/**
 * Создает новый массив из массива массивов любой вложенности
 *
 * @param {*[]} array - массив массивов/любых элементов
 * @return {*[]} new array
 */
const plain = (array) => {
    if (!Array.isArray(array)) {
        return null;
    }

    return array.reduce((result, element) => {
        return result.concat(Array.isArray(element) ? plain(element) : element);
    }, []);
};
