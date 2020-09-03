'use strict';

/**
 * Finds the biggest and the smallest number in a given string.
 * Returns an array with 2 elements where the first element is the smallest number and the second one is the biggest.
 * Returns [undefined, undefined] if no numbers being found or the input parameter is not a string.
 * @param string - is the input string.
 * @returns {[number, number]|[undefined, undefined]} - is the result array.
 */

const minmax = (string) => {
    if (typeof(string) !== 'string' || string === '') {
        return [undefined, undefined];
    }
    const arrayOfNumberWords = string.split(' ').filter((number) => (!isNaN(number)));
    if (arrayOfNumberWords.length === 0) {
        return [undefined, undefined];
    }
    const arrayOfNumbers = arrayOfNumberWords.map((number) => (Number(number)));
    const min = Math.min(...arrayOfNumbers);
    const max = Math.max(...arrayOfNumbers);
    return [min, max];
}