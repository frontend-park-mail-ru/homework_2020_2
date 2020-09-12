'use strict';

/**
 * Функция, реализует RLE-сжатие
 * @param {string} str Входная последовательность
 * @returns {string}
 *
 * @throws {Error('Некорректный тип входных данных')}
 * @throws {Error('Недопустимые символы в строке')}
 * @example
 * // returns 'A3B'
 * rle('AAAB');
 * @example
 * // returns 'A10'
 * rle('AAAAAAAAAA');
 */

const rle = str => {
    if (typeof str !== 'string') {
        throw Error('Некорректный тип входных данных');
    }

    let regexObj = /[0-9]/;
    if (regexObj.test(str)) {
        throw Error('Недопустимые символы в строке');
    }

    let result = (str.split('')).reduce(function (sum, now) {
        if (now === sum.prev) {
            sum.count = sum.count + 1;
            return sum;
        }
        sum.res += sum.prev;
        if (sum.count > 1) {
            sum.res += sum.count;
            sum.count = 1;
        }
        sum.prev = now;
        return sum;
    }, {'count': 0, 'prev': str[0], 'res': ''});

    if (result.count >= 1) {
        result.res += result.prev;
    }

    if (result.count > 1) {
        result.res += result.count;
    }
    return result.res;
}
