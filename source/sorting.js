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
 *     sorting({techno: 'park'}, {techno: 'atom'}, [ 'techno' ])
 */
function sorting(inputArr, keys) {
    if (!Array.isArray(inputArr) || !Array.isArray(keys)) {
        throw new Error('Args should be arrays');
    }
    keys.reverse().forEach(element => {
        inputArr.sort((a, b) => {
            if ((typeof a[element]) !== (typeof b[element])) {
                throw new Error('Comparing elements should same type objects');
            }
            if ((typeof a[element]) === "string") {
                return b[element] - a[element];
            } else if ((typeof a[element]) === "number") {
                return a[element] - b[element];
            } else {
                throw new Error('Comparing elements should be strings or numbers');
            }
        });
 
        // inputArr.sort((a, b) => {
        //     var isNumber = (typeof a[element] === "number");
        //     return a[element].toString().localeCompare(b[element].toString(), 'en-US', { numeric: isNumber });
        // });
        
    });
    return inputArr;
};
 
