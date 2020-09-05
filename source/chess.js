'use strict';

/**
 * @function
 * @param number
 * @return {string|null} - chess line drawing or null
 */
const chess = (number) => {
    // проверка данных на вход
    if (!isFinite(number) || number <= 1 || !Number.isInteger(Number(number))) {
        return null;
    }

    let result = '';
    let line = ''
    let symbolSelection;
    let odd = number % 2 == 1;
    for (let i = 0; i < number; ++i) {
        symbolSelection = i % 2 === 0;
        if (symbolSelection) {
            line = "* ".repeat(number / 2);
        } else {
            line = " *".repeat(number / 2);
        }
        if (odd) {
            line += line.charAt(0);
        }
        symbolSelection = !symbolSelection;
        result += (line + '\n');
    }

    return result;
}