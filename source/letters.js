'use strict';

//Функция для получения мапы символов из строки
const createMapOfSymbols = (string) => {
    const mapLetters = new Map();
    string.forEach(element => {
        if (mapLetters.has(element) === false) {
            mapLetters.set(element, 1);
        } else {
            mapLetters.set(element, mapLetters.get(element) + 1);
        }
    })
    return mapLetters;
}

const letters = (string, flag) => {

    if (string === undefined) {
        throw new TypeError("Первый аргумент не валиден");
    }
    if (typeof string !== "string") {
        throw new TypeError("Первый аргумент должен быть строкой");
    }
    if (typeof flag !== "boolean" && flag !== undefined) {
        throw new TypeError("Второй аргумент должен иметь тип bool или не должен быть передан");
    }

    string = string.split('');
    if (flag === false) // Реверс строки для случая когда нужно оставлять последнюю букву
        string.reverse();

    //Получение мапы символов
    const mapLetters = createMapOfSymbols(string);

    let result = '';

    if (flag !== undefined) {
        for (let key of mapLetters.keys()) {
            result += key;
        }
        if (flag === false) {
            result = result.split('').reverse().join('');
        }
    } else {  // Случай если флаг не определен
        for (let key of mapLetters.keys()) {
            if (mapLetters.get(key) === 1) {
                result += key;
            }
        }
    }
    return result;
}
