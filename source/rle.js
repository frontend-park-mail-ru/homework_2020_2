'use strict';

/**
 * Функция, реализующая RLE-сжатие
 * @param {string} string Входная строка
 * @returns {string}
 */
const rle = string => {
    if (typeof string !== 'string' || string.length === 0) {
        return string;
    }
    let length = 0;
    let lastChar = string.charAt(0);
    let resultString = lastChar;
    for (const currentChar of string) {
        if (currentChar !== lastChar) {
            if (length > 1) {
                resultString += length;
            }
            length = 1;
            lastChar = currentChar;
            resultString += currentChar;
        } else {
            length++;
        }
    }
    if (length > 1) {
        resultString += length;
    }
    return resultString;
};
