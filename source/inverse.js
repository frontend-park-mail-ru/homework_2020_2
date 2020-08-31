'use strict';

const checkArray = array => {
    if (array === undefined) {
        throw new Error('Первый аргумент обязателен');
    }
    if (!Array.isArray(array)) {
        throw new TypeError('Первый аргумент не массив');
    }
}

const checkImmovable = immovable => (
    typeof immovable === 'number' &&
    !isNaN(immovable) &&
    immovable !== 0
);

/**
 * Переварачивает массив с возможностью оставить на месте первые/последние immovable элементы.
 *
 * @param {Array} array - Массив, который нужно перевернуть.
 * @param {Number} immovable - Число непереставляемых элементов. Если immovable > 0, на месте остаются первые immovable элементы. Если immovable < 0, то immovable последние.
 *
 * @return {Array} Перевернутый массив, оставляя на месте указанные элементы
 */
const inverse = (array, immovable) => {
    checkArray(array);
    
    if (checkImmovable(immovable)) {
        if (Math.abs(immovable) > array.length) {
            return array;
        }

        const firstElements = array;
        const secondElements = array.splice(immovable);

        return immovable > 0 ? [...firstElements, ...secondElements.reverse()] :
            [...firstElements.reverse(), ...secondElements];
    }

    return array.reverse();
}
