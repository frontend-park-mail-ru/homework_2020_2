'use strict';

/**
 *
 * Меняет порядок элементов массива на противоположный с заданным смещением
 * от начала/конца массива
 *
 * @param {Array} arr - исходный массив
 * @param {Number} offset - целое число, задающее количество элементов, порядок которых
 *                          остается прежним от начала или конца массива;
 *                          в случае, если offset > 0, то от начала,
 *                          если offset < 0, то с конца
 *
 * @throws {TypeError} Первый аргумент должен быть только массивом, второй только целым числом
 *
 * @returns {Array} - массив результат
 */
const inverse = (arr, offset = 0) => {

    if (!Array.isArray(arr) || !Number.isInteger(offset)) {
        throw new TypeError('Invalid arguments')
    }

    if (Math.abs(offset) >= arr.length - 1) {
        return arr
    }

    let reversedPart;
    if (offset >= 0) {
        reversedPart = arr.slice(offset).reverse();
        arr = [...arr.slice(0, offset), ...reversedPart];

    } else {
        reversedPart = arr.slice(0, offset).reverse();
        arr = [...reversedPart, ...arr.slice(offset)];
    }

    return arr
}
