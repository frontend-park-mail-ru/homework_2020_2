'use strict';


/**
 * @function
 * @return {string|null} - chess line drawing or null
 * @param number
 */

const chess  = number => {
    // валидация
    if (isNaN(number) || number <= 1 || number === Infinity ) {
        return null;
    }

    let result = String();
    let key = true;
    for(let i = 0; i < number; ++i) {
        key = i % 2 === 0;
        for(let j = 0; j < number; ++j) {
            if (key) {
                result += '*';
            } else {
                result += ' ';
            }
            key = !key;
        }
        result += '\n';
    }
    return result;
}