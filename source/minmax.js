'use strict';

/**
 * Finds min and max number in an input string and returns an array of 2 elements [min max].
 * Throws exceptions if there is no numbers or the input parameter is not a string.
 * @param numberString - is the input string.
 */

let minmax = (numberString) => {
    if (!numberString || typeof numberString !== 'string') {
        throw Error('Некорректный тип входных данных');
    }

    let re = / |,|\+|\*|\\|,|:|;|^/
    // let re = /\D/
    const numbers = numberString.split(re).filter((number) => !isNaN(number));

    if (!numbers.length) {
        throw Error('Отсутствуют числа во входных данных');
    }

    return [Math.min(...numbers), Math.max(...numbers)];
}
