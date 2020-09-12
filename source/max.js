'use strict';

const max = numbers => Math.max(...numbers);


/** @description adding symbol to compressed data with checking num of repeating
 * @param {string} compressed Compressed data
 * @param {char} symbol Value that we wanted to add
 * @param {int} counter Number of repeating this symbol
 * @returns {*} Updated compressed string
 */
const addToCompressed = (compressed, symbol, counter) => {
    compressed += symbol;
    if (counter !== 1) {
        compressed += counter;
    }
    return compressed;
}


/** @description compressing origin data by algorithm rle
 * @param originData what we want to compress
 * @returns {string|*} result of compressing
 */
const rle = originData => {
    let compressedData = '';

    if (typeof originData !== 'string') {
        throw('NOT STRING!');
    }

    const reg = new RegExp('#[0-9]+#');
    if (reg.test(originData)) {
        throw ('UNEXPECTED SYMBOL!');
    }

    let counter = 1, prevSymbol = originData.charAt(0);
    for (let i = 1; i < originData.length; i++) {
        if (originData[i] === prevSymbol) {
            counter++;
        } else {
            compressedData = addToCompressed(compressedData, prevSymbol, counter);
            counter = 1;
            prevSymbol = originData[i];
        }
    }
    compressedData = addToCompressed(compressedData, prevSymbol, counter)
    return compressedData;
}
