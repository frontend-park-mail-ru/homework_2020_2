'use strict';

/**
 * Функция в зависимости от значения flag возвращает различные
 * варианты новой строки без повторяющихся символов.
 *
 * @param {string} string - входная строка.
 * @param {boolean|undefined} flag - флаг, который определяет поведение
 *        программы.
 *        Ниже перечислены различные вариации поведения программы:
 *        1) flag = true - из строки удаляются все повторяющиеся
 *        символы исключая первый;
 *        2) flag = false - из строки удаляются повторяющиеся
 *        символы исключая последний;
 *        3) Если flag не передаётся, то из строки удаляются
 *        все повоторяющиеся символы.
 * @returns {string} новая строка без повторяющихся символов.
 */
const letters = (string, flag) => {
    if (string === undefined) {
        return 'Error';
    }

    return string.split('').filter((char, index, string) => {
        if (flag === undefined) {
            return string.indexOf(char) === string.lastIndexOf(char);
        } else {
            return flag ? string.indexOf(char) === index : string.lastIndexOf(char) === index;
        }
    }).join('');
};
