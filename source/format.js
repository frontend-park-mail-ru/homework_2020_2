'use strict';

const format = (inputArray, columns) => {
    if (!(Array.isArray(inputArray))
        || (typeof columns !== 'number')
        || (!(Number.isFinite(columns)))
        || (Number.isNaN(columns))
        || (!((columns ^ 0) === columns))) {
        throw new TypeError('wrong type');
    }

    if ((inputArray.length === 0)
        || (!(inputArray.every(item => (item ^ 0) === item)))) {
        throw new TypeError('wrong type');
    }

    if (columns === 0) {
        throw new SyntaxError('wrong parameter');
    }

    const line = inputArray.slice(0);

    const columnsSizes = Array(columns).fill(0);
    for (let i = 0; i < line.length; i++) {
        const columnNumber = i % columns;
        const currentLen = ((Boolean(line[i]) || line[i] === 0)) ? line[i].toString().length : 0;
        columnsSizes[columnNumber] = Math.max(columnsSizes[columnNumber], currentLen);
    }

    let result = '';
    for (let i = 0; i < line.length; i++) {
        const columnNumber = i % columns;
        result += ((Boolean(line[i]) || line[i] === 0))
            ? line[i].toString()
                     .padStart(columnsSizes[columnNumber])
            : ' '.repeat(columnsSizes[columnNumber]);

        if ((columns === (columnNumber + 1))
            && (i !== line.length - 1)) {
            result += '\n';
        }
        else if (i !== line.length - 1) {
                result += ' ';
        }
    }

    return result;
}
