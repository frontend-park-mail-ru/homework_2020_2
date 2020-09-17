'use strict';

const ROMAN_ARABIC = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XV:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
};

/** @description Перевод числа из римского формата в арабский
 * @param {string} roman - арабское число, которое необходимо перевести
 * @return {number} arabic - число в арабской системе счисления
 */
const romanToArabic = (roman) => {
    let arabic = 0;
    let value = 0;
    let prev = 0;

    roman.split('')
        .forEach(char => {
            const current = ROMAN_ARABIC[char];
            if (current > prev) {
                arabic -= 2 * value;
            }

            if (current != prev) {
                value = 0;
            }

            value += current;
            arabic += current;
            prev = current;
        })

    return arabic;
}

/** @description Перевод числа из арабского формата в римский
 * @param {number} arabic - римское число, которое необходимо перевести
 * @return {string} число в римской системе счисления
 */
const arabicToRoman = (arabic) => {
    return Object.keys(ROMAN_ARABIC)
        .reduce((result, key, idx) => {
            const quotient = Math.floor(arabic / ROMAN_ARABIC[key]);
            arabic %= ROMAN_ARABIC[key];

            return result + key.repeat(quotient);
        }, '')
}

/** @description Выбор функции в зависимости от введенного значения
 * @param {string|number} input -  число, которое необходимо перевести
 * @return {number|string} число, переведенное в необходимую систему счисления, в зависимости от ввода
 */
function roman(input) {
    if (!input || !/^[0-9]+$|^[IiVvXxLlCcDdMm]+$/.test(input.toString())) {
        throw new Error('Введено неверное число');
    }

    if (input > 0 && input <= 3999) {
        return arabicToRoman(input)
    }

    const inputStr = input.toString().toUpperCase();

    if (/^[IVXLCDM]+$/.test(inputStr)) {
        return romanToArabic(inputStr)
    }

    throw new Error("Введено неверное число");
}
