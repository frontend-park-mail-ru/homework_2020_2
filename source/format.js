'use strict';

const format = (inputArray, columns) => {
    if (!(Array.isArray(inputArray)) || (typeof columns !== 'number')
        || (!(Number.isFinite(columns))) || (Number.isNaN(columns)) || (!((columns ^ 0) === columns))) {
        throw new TypeError('wrong type');

    }

    if ((inputArray.length == 0) || (!(inputArray.every(item => (item ^ 0) === item)))) {
        throw new TypeError('wrong type');
    }

    if (columns === 0) {
        return '';
    }

    const line = inputArray.slice(0);

    const columnsSizes = Array(columns);
    for (let i = 0; i < line.length; i++) {
        const columnNumber = i % columns;
        if (columnsSizes[columnNumber] === undefined) {
            columnsSizes[columnNumber] = 0;
        }
        const currentMax = columnsSizes[columnNumber];
        const currentStr = String(line[i]);
        if ((currentStr !== 'undefined') && (currentStr.length > currentMax)) {
            columnsSizes[columnNumber] = currentStr.length;
        }
    }

    let result = '';
    for (let i = 0; i < line.length; i++){
         const columnNumber = i % columns;
         let current = '';
         if (String(line[i]) === 'undefined') {
             current =''.toString().padStart(columnsSizes[columnNumber]);
         }
         else {
             current = line[i].toString().padStart(columnsSizes[columnNumber]);
         }
         result += current;

        if ((columns === (columnNumber + 1)) && (i !== line.length - 1)){
            result += '\n';
        }
        else {
            if (i !== line.length - 1) {
                result += ' ';
            }
        }
    }

    return result;
}
