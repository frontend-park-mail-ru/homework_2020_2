'use strict';

/**
 * @function
 * @param number
 * @return {Boolean} - result of checking
 */
const wrongSizeChess = (number) => {
    return !isFinite(number) || number <= 1 || !Number.isInteger(+number)
}

/**
 * @function
 * @param number
 * @return {string|null} - chess line drawing or null
 */
const chess = (number) => {
    // проверка данных на вход
    if (wrongSizeChess(number)) {
        return null;
    }

    let result;
    let firstLine = '* '.repeat(number / 2);
    let secondLine = ' *'.repeat(number / 2);
    let odd = number % 2;
    if (odd) {
        firstLine += firstLine.charAt(0);
        secondLine += secondLine.charAt(0);
    }
    firstLine += '\n';
    secondLine += '\n';

    result = (firstLine + secondLine).repeat(number / 2);
    if (odd) {
        result += firstLine;
    }
    return result;
}