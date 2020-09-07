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
    if (!Array.isArray(inputArr)) {
        return [];
    }
    keys.reverse().forEach(element => {
        inputArr.sort(function(a, b) {
            var isNumber = (typeof a[element] === "number");
            return a[element].toString().localeCompare(b[element].toString(), 'en-US', { numeric: isNumber });
        });
    });
    return inputArr;
};
