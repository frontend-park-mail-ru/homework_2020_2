'use strict';

/**
 * @function
 * @param number
 * @return {Boolean} - result of checking
 */
const sizeCheckForChess = (number) => {
    return !isFinite(number) || number <= 1 || !Number.isInteger(+number)
}

/**
 * @function
 * @param number
 * @return {string|null} - chess line drawing or null
 */
const chess = (number) => {
    // проверка данных на вход
    if (sizeCheckForChess(number)) {
        return null;
    }

    let result;
    let firstLine, secondLine;
    let odd = number % 2;
    firstLine = '* '.repeat(number / 2);
    secondLine = ' *'.repeat(number / 2);
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