'use strict';

/**
 * Finds the smallest and the biggest number in a given string.
 * Returns an array with 2 elements where the first element is the smallest number and the second one is the biggest.
 * Returns [undefined, undefined] if no numbers being found or the input parameter is not a string.
 * @param string - is the input string.
 * @returns {[number, number]|[undefined, undefined]} - is the result array.
 */

const minmax = (string) => {
    if (typeof(string) !== 'string' || !string) {
        return [undefined, undefined];
    }
    const arrayOfNumberWords = string.split(' ').filter((number) => !isNaN(number));
    if (!arrayOfNumberWords.length) {
        return [undefined, undefined];
    }
    const arrayOfNumbers = arrayOfNumberWords.map((number) => Number(number));
    return [Math.min(...arrayOfNumbers), Math.max(...arrayOfNumbers)];
}