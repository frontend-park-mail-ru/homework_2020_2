'use strict'
/**
 * Function returns massive of 2 elements, where first - min, second - max items from current string
 * @param string - string or number
 * @returns {(Array)}
 */
const minmax = (string) => {
    if (typeof (string) !== "string")
        return [undefined, undefined];
    const massive = string.split(/ |, /).filter((item) => !isNaN(parseFloat(item)));
    const min = Math.min(...massive);
    const max = Math.max(...massive);
    const result = massive.filter((item) =>
        item == max || item == min
    ).length === 0 ? [undefined, undefined] : [min, max];
    return result;
}