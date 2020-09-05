'use strict';

/**
 * Функция, реализующая RLE-сжатие
 * @param {string} string Входная строка
 * @returns {string}
 *
 * @example
 * // returns 'A4B4'
 * rle('AAAABBBB');
 * @example
 * // returns 'ABCDE3F'
 * rle('ABCDEEEF');
 * @example
 * // returns 'BC2D3AX4'
 * rle('BCCDDDAXXXX');
 */
const rle = string => {
    if (typeof string !== 'string' || string.length === 0) {
        return string;
    }
    let length = 0;
    let lastChar = string.charAt(0);
    let resultString = lastChar;
    for (const currentChar of string) {
        if (currentChar === lastChar) {
            length++;
            continue;
        }
        if (length > 1) {
            resultString += length;
        }
        length = 1;
        lastChar = currentChar;
        resultString += currentChar;
    }
    if (length > 1) {
        resultString += length;
    }
    return resultString;
};
