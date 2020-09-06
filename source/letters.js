'use strict';

//Функция для получения мапы символов из строки
const createMapOfSymbols = (arrayString) => {
    const mapLetters = new Map();
    arrayString.forEach(element => {
        if (mapLetters.has(element) === false) {
            mapLetters.set(element, 1);
        } else {
            mapLetters.set(element, mapLetters.get(element) + 1);
        }
    })
    return mapLetters;
}

/** @description Функция удаляет из строки символы которые встречались более 1 раза.
 * @param {string} string Исходная строка.
 * @param {boolean} flag Если параметр флаг не был передан то удаляем все повторяющиеся символы.
 *                       Если флаг был передан и его значение True, то оставляем первое вхождение символа.
 *                       Если флаг был передан и его значение False, то оставляем последние вхождение символа.
 * @return {string}
 */
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

    const arrayString = string.split('');
    if (flag === false) { // Реверс строки для случая когда нужно оставлять последнюю букву
        arrayString.reverse();
    }

    //Получение мапы символов
    const mapLetters = createMapOfSymbols(arrayString);

    let result = '';
    let arraySymbols;
    arraySymbols = Array.from(mapLetters.keys());
    const reducer = (accumulator, currentChar) => accumulator + currentChar;

    // Случай если флаг не был передан
    if (flag === undefined) {
        for (let key of mapLetters.keys()) {
            if (mapLetters.get(key) === 1) {
                result += key;
            }
        }
        return result;
    }

    result = arraySymbols.reduce(reducer);

    if (!flag) { // Если был передан флаг false
        result = result.split('').reverse().join('');
    }

    return result;
}
