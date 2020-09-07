'use strict';

/**
 * Оберточная функция перевода чисел
 *
 * @param {number|string} number - введенное пользователем число для перевода
 * @returns {number|string}
 */
const roman = (number) => {
    if (/^[IVXLCDMivxlcdm]+$/.test(number)) {
            return deromanize(number);
    } else if (/^[0-9]+$/.test(number)) {
            return romanize(number);
    }
    throw new Error('Некорректный тип входных данных');
}

/**
 * Функция перевода римского числа в арабское
 *
 * @param {string} number - введенное пользователем число для перевода
 * @returns {number}
 */
const deromanize = (number) => {
    const ROMAN_ALPHABET = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    const DIGITS = Object.keys(ROMAN_ALPHABET);

    return number.toUpperCase()
            .split('')
            .reduce((result, current, index) => {
                    (DIGITS.indexOf(current) < DIGITS.indexOf(number.charAt(index + 1).toUpperCase())) ?
                          result -= ROMAN_ALPHABET[current] :
                          result += ROMAN_ALPHABET[current];
                    return result;
            }, 0);
}

/**
 * Функция перевода арабского числа в римское
 *
 * @param {number} number - введенное пользователем число для перевода
 * @returns {string}
 */
const romanize = (number) => {
    if (number > 3999 || number === 0) {
            throw new Error('Перевод в римское число неосуществим');
    }

    const ROMAN_ALPHABET = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

    return Object.keys(ROMAN_ALPHABET).
            reduce((result_string, current, index) => {
                    const QUOTIENT = Math.floor(number / ROMAN_ALPHABET[current]);

                    number -= QUOTIENT * ROMAN_ALPHABET[current];
                    return result_string + current.repeat(QUOTIENT);
            }, '');
}
