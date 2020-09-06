'use strict';

/**
 * @function
 * @param number
 * @return {Boolean} - result of checking
 */
const isInteger = (number) => {
    if (!isFinite(number) || number <= 1 || !Number.isInteger(+number)) {
        return false;
    }
    return true;
}



/**
 * @function
 * @param number
 * @return {string|null} - chess line drawing or null
 */
const chess = (number) => {
    // проверка данных на вход
    if (!isInteger(number)) {
        return null;
    }

    let result;
    let firstLine, secondLine;
    let odd = number % 2;
    firstLine = "* ".repeat(number / 2);
    secondLine = " *".repeat(number / 2);
    if (odd) {
        firstLine += firstLine[0];
        secondLine += secondLine[0];
    }
    firstLine += '\n';
    secondLine += '\n';

    result = (firstLine + secondLine).repeat(number / 2);
    if (odd) {
        result += firstLine;
    }
    return result;
}