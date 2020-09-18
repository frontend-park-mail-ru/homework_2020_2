'use strict';
 
/**
 * Sorting plain-objects array by given keys.
 * 
 * 
 * @author Syrbylova Xenia 
 *
 * @param {Array} inputArr - Plain objects
 * @param {Array} keys - Keys
 * @return {Array} - Sorted by keys array
 *
 * @example
 *
 *     sorting([{'techno': 'park'}, {'techno': 'atom'}], [ 'techno' ])
 */
const sorting = (inputArr, keys) => {
    if (!Array.isArray(inputArr) || !Array.isArray(keys)) {
        throw new Error('Args should be arrays');
    }
    keys.forEach(key => {
        const type = typeof inputArr[0][key];
        if (!inputArr.every(obj => typeof obj[key] === type) && (type === "string" || type === "number")) {
            throw new Error('Comparing elements should be the same type objects - strings or numbers');
        }
    })
    keys.reverse().forEach(element => {
        inputArr.sort((a, b) => {
            if ((typeof a[element]) === "string") {
                return a[element].localeCompare(b[element]);
            } else {
                return a[element] - b[element];
            };
        });
    });
    return inputArr;
}
 
