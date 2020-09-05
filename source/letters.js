'use strict';

/**
 * Функция в зависимости от значения flag возвращает различные
 * варианты новой строки без повторяющихся символов.
 *
 * @param {string} string - входная строка.
 * @param {boolean|undefined} flag - флаг, который определяет поведение
 *        программы.
 *        Ниже перечислены различные вариации поведения программы:
 * @example flag = true - из строки удаляются все повторяющиеся
 *        символы исключая первый;
 * @example flag = false - из строки удаляются повторяющиеся
 *        символы исключая последний;
 * @example Если flag не передаётся, то из строки удаляются
 *        все повоторяющиеся символы.
 * @returns {string} новая строка без повторяющихся символов.
 */
const letters = (string, flag) => {
    if (typeof string != 'string') {
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
