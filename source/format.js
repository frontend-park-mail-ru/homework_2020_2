'use strict';

const format = (inputArray, columns) => {
    if (!(Array.isArray(inputArray)) || (typeof (columns) !== 'number'))
        throw new SyntaxError('wrong type');

    const line = inputArray.slice(0);
    const table = [];
    const rows = Math.ceil(line.length / columns);

    for (let i = 0; i < rows; i++) {
        let rowArray = [];
        for (let j = 0; j < columns; j++) {
            let current = String(line.shift());
            (current === 'undefined') ? rowArray.push('') : rowArray.push(current);
        }
        table.push(rowArray);
    }

    for (let i = 0; i < columns; i++) {
        let col = table.map(x => x[i]);
        let lenRow  = col.reduce((a, b) => { return a.length > b.length ? a : b; });
        lenRow = (lenRow !== undefined) ? lenRow.length : 0;

        col.forEach((item, j) => {
            let current = table[j][i];
            table[j][i] = '';
            (!((current === '') && (j === col.length - 1) && (i === columns - 1)))
                ? table[j][i] += ' '.repeat(lenRow - current.length) : table[j][i] = '';
            table[j][i] += current;
        });
    }

    let print = '';
    table.forEach((item, i) => {
        let current = '';
        current = (i === rows - 1) ? item.join(' ') : item.join(' ') + '\n';
        print += current;
    });
    return print.trimEnd();
};
