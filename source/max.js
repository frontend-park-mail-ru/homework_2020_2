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
    if (typeof originData !== 'string') {
        throw new Error('NOT STRING!');
    }

    if (/[0-9]+/.test(originData)) {
        throw new Error('UNEXPECTED SYMBOL!');
    }

    let counter = 1, prevSymbol = originData[0], compressedData = '';

    for (let i = 1; i < originData.length; i++) {
        if (originData[i] === prevSymbol) {
            counter++;
        } else {
            compressedData = addToCompressed(compressedData, prevSymbol, counter);
            counter = 1;
            prevSymbol = originData[i];
        }
    }

    return addToCompressed(compressedData, prevSymbol, counter);
}
