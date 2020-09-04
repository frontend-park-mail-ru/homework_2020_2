'use strict';

let letters = (string, flag) => {

    if (string === undefined) {
        throw new SyntaxError("Не валидная строка");
    }
    if(typeof string !== "string") {
        throw new SyntaxError("Не валидная строка");
    }

    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
            result += string[i];
        } else {
            if (flag === true && i === string.indexOf(string[i])) {
                result += string[i];
            }
            if (flag === false && i === string.lastIndexOf(string[i])) {
                result += string[i];
            }
        }
    }
    return result;
}