/**
 * Create one array from array of arrays.
 * @param arrays - array of arrays
 * @returns {[array]}
 */
const plain = (arrays) => {
    if (!Array.isArray(arrays)) {
        return [];
    }
    while (arrays.filter((item) => Array.isArray(item)).length) {
        arrays.forEach((item, index, array) => {
            if (Array.isArray(item)) {
                array.splice(index, 1, ...item);
            }
        });
    }
    return arrays;
}

