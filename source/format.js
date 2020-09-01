'use strict';

const arrayColumn = (arr, n) => arr.map(x => x[n]);

const format = function (inputArray, columns) {
    let line = inputArray.slice(0);
    let table = [];
    let rows = Math.ceil(line.length / columns);
    for (let i = 0; i < rows; i++){
        let rowArray = [];
        for (let j = 0; j < columns; j++){
            let current = String(line.shift());
            if (current == 'undefined')
                rowArray.push('');
            else
                rowArray.push(current);
        }
        table.push(rowArray);
    }

    let lenRow = 0;
    for (let i = 0; i < columns; i++){
        let col = arrayColumn(table, i);
        let len = col.sort(function (a, b) { return b.length - a.length; })[0];
        if (len != undefined)
            len = len.length;

        lenRow = len;
        for (let j = 0; j < col.length; j++){
            let current = table[j][i];
            table[j][i] = "";
            if (!((current == '') && (j == col.length - 1) && (i == columns -1)))
                for (let m = 0; m < (len - current.length); m++) table[j][i] += " ";
            table[j][i] += current;
        }
    }

    let print = '';
    for (let i = 0; i < rows ; i++){
        let current = '';
        if(i == rows - 1)
            if(table[i].length == 2)
                current = table[i].join('');
            else
                current = table[i].join(' ');
        else
            current = table[i].join(' ') + '\n';

        print += current;
    }

    return print;
};
