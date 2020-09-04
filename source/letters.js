'use strict';

let letters = (string, flag) => {

    if (string === undefined) {
        throw new SyntaxError("Не валидная строка");
    }
    if (typeof string !== "string") {
        throw new SyntaxError("Не валидная строка");
    }

    string = string.split('');
    if (flag === false)
        string.reverse();

    //Получение мапы символов
    const letters = new Map();
    string.forEach(element => {
        if (letters.has(element) === false) {
            letters.set(element, 1);
        } else {
            letters.set(element, letters.get(element) + 1);
        }
    })

    let result = '';

    if (flag === true) {
        for (let key of letters.keys()) {
            result += key;
        }
    } else if (flag === false) {
        for (let key of letters.keys()) {
            result += key;
        }
        result = result.split('').reverse().join('');
    } else {
        for (let key of letters.keys()) {
            if (letters.get(key) === 1) {
                result += key;
            }
        }
    }

    return result;
}
