"use strict";
/**
 * Находим НОД двух чисел a и b
 *
 * @param {number} a - первое число
 * @param {number} b - второе число
 * @returns {number}
 */
const euclidForTwoArgument = (a, b) => {
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    return Math.max(a, b);
}

/**
 * Находим НОД произвольного количества натуральных чисел
 *
 * @returns {number}
 */
const euclid = (...arg) => {
    if (!arg.length) {
        throw new RangeError("На вход был подан пустой массив");
    }
    if (arg.some(element => !Number.isInteger(element))) {
        throw new TypeError("Некорректные аргументы");
    }

    if (arg.length === 1) {
        return arg[0];
    }
    let res = 0;
    arg.forEach((element) => {
        res = euclidForTwoArgument(res, element);
    })
    return res;
}

