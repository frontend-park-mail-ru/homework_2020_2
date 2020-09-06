'use strict';

/**
 * Оберточная функция перевода чисел
 *
 * @param {number|string} number - введенное пользователем число для перевода
 * @returns {number}
 */
const roman = (number) => {

    if (/^[IVXLCDMivxlcdm]+$/.test(number)) {
        return deromanize(number);
    }
    else if (/^[0-9]+$/.test(number)) {
        return romanize(number);
    }
    throw new Error("Некорректные входные данные");
}

/**
 * Функция перевода римского числа в арабское
 *
 * @param {string} number - введенное пользователем число для перевода
 * @returns {number}
 */
let deromanize = (number) => {
    const ROMAN_ALPHABET = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    const DIGITS = Object.keys(ROMAN_ALPHABET);

    if (!number) {
        throw new Error("Невозможно обработать");
    }

    number = number.toUpperCase();

    let res = 0;
    let array = Array.from(number);

    array.forEach((element, index) => {
        (DIGITS.indexOf(element) < DIGITS.indexOf(array[index + 1])) ?
        res -= ROMAN_ALPHABET[element] :
        res += ROMAN_ALPHABET[element];
    });

   /*let array = Array.from(number);
   let res = array.reduce(function(previousValue, item, index, array) {
       if (DIGITS.indexOf(item) < DIGITS.indexOf(array[index + 1])) {
           (Number)previousValue - ROMAN_ALPHABET[item];
       }
       else { previousValue + ROMAN_ALPHABET[item]; }
   }, 0);*/

    return res;
}

/**
 * Функция перевода арабского числа в римское
 *
 * @param {number} number - введенное пользователем число для перевода
 * @returns {number}
 */
let romanize = (number) => {
    if (number > 3999 || number <= 0) {
        throw new Error("Невозможно обработать");
    }

    const ROMAN_ALPHABET = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let final_str = '';

    Object.keys(ROMAN_ALPHABET).forEach((element) => {
        let q = Math.floor(number / ROMAN_ALPHABET[element]);

        number -= q * ROMAN_ALPHABET[element];
        final_str += element.repeat(q);
    });

    return final_str;
}
