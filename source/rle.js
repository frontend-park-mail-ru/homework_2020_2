'use strict';

const rle = str => {
    if (str.match(/[^A-Za-z]/)) {
        throw Error('Некорректный тип входных данных');
    }

    let res = '';
    let prev = str[0];
    let count = 0;
    for (const now of str) {
        if (now != prev) {
            res += prev;
            if (count > 1) {
                res += count;
                count = 1;
            }
            prev = now;
        } else {
            ++count;
        }
    }

    if (count >= 1) {
        res += prev;
    }

    if (count > 1) {
        res += count;
    }
    return res;
}
