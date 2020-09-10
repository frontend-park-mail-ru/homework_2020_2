/**
 * Create one array from array of arrays.
 * @param {Array} arrays - Array of arrays.
 * @returns {Array} Array without arrays.
 */
const plain = (arrays) => {
    if (!Array.isArray(arrays)) {
        return [];
    }
    while (hasArrays(arrays)) {
        arrays.forEach((item, index) => {
            if (Array.isArray(item)) {
                arrays.splice(index, 1, ...item);
            }
        });
    }
    return arrays;
}

/**
 * Give information about numbers of arrays in array.
 * @param {Array} array Some array.
 * @returns {number} Number of arrays in given array.
 */
const hasArrays = (array) => array.filter((item) => Array.isArray(item)).length;