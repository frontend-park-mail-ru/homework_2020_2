'use strict';

/**
 * Функция, реализует RLE-сжатие
 *
 * @param {string} str Входная последовательность
 * @returns {string}
 *
 * @throws {Error('Некорректный тип входных данных')}
 * @throws {Error('Недопустимые символы в строке')}
 *
 * @example
 * // returns 'A3B'
 * rle('AAAB');
 *
 * @example
 * // returns 'A10'
 * rle('AAAAAAAAAA');
 */

const rle = str => {
    if (typeof str !== 'string') {
        throw Error('Некорректный тип входных данных');
    }

    if (/[0-9]/.test(str)) {
        throw Error('Недопустимые символы в строке');
    }

    return str.split('').reduce((accumulator, currentValue, index, array) => {
        if (currentValue === array[index + 1]) {
            ++accumulator.count;
            return accumulator;
        }

        accumulator.res += currentValue;

        if (accumulator.count > 1) {
            accumulator.res += accumulator.count;
            accumulator.count = 1;
        }

        return accumulator;
    }, {'count': 1, 'res': ''}).res;
}
