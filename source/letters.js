'use strict';

/**
 * Функция в зависимости от значения flag возвращает различные
 * варианты новой строки без повторяющихся символов.
 *
 * @param {string} string - входная строка.
 * @param {boolean|undefined} flag - флаг, который определяет поведение
 *        программы.
 *
 * @returns {string} новая строка без повторяющихся символов.
 *
 * @example
 * // returns 'he world'
 * letters('hello world', false);
 * @example
 * // returns 'helo wrd'
 * letters('hello world', true)
 * @example
 * //returns 'пвет, м'
 * letters('привет, мир');
 */
const letters = (string, flag) => {
    if (typeof string !== 'string') {
        throw new TypeError('The first argument must be a string');
    }

    return string.split('').filter((char, index, string) => {
        const firstIdxChar = string.indexOf(char);
        const lastIdxChar = string.lastIndexOf(char);
        if (flag === undefined) {
            return firstIdxChar === lastIdxChar;
        }

        return flag ? firstIdxChar === index : lastIdxChar === index;
    }).join('');
};
