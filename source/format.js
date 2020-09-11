'use strict'

/**
 * The function converts the array to a column-formatted string.
 * @param {Array} inputArray - Array to convert.
 * @param {number} columns - number of columns.
 * @returns {string} - column-formatted string.
 */
const format = (inputArray, columns) => {
    if (!Array.isArray(inputArray) || !Number.isInteger(columns)) {
        throw new TypeError('wrong type');
    }

    if (
        !inputArray.length ||
        !inputArray.every((item) => typeof item === 'number')
    ) {
        throw new TypeError('wrong type');
    }

    if (!columns) {
        throw new SyntaxError('wrong parameter');
    }

    const line = inputArray.slice(0);

    const columnsSizes = Array(columns).fill(0);
    line.forEach((item, i) => {
        const columnNumber = i % columns;
        const currentLen = item.toString().length;
        columnsSizes[columnNumber] = Math.max(
            columnsSizes[columnNumber],
            currentLen
        );
    })

    let result = ''
    for (let i = 0; i < line.length; i++) {
        const columnNumber = i % columns;
        result +=
            Boolean(line[i]) || line[i] === 0
                ? line[i].toString().padStart(columnsSizes[columnNumber])
                : ' '.repeat(columnsSizes[columnNumber]);

        if (columns === columnNumber + 1 && i !== line.length - 1) {
            result += '\n';
        } else if (i !== line.length - 1) {
            result += ' ';
        }
    }

    return result;
}
