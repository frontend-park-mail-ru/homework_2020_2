'use strict';

const rle = str => {
    if (str.length == 0)
        return '';

    let res = str[0];
    let prev = str[0];
    let count = 1;
    
    for (let i = 1; i < str.length; ++i) {
        if (str[i] != prev) {
            if (count != 1)
                res += count;

            count = 1;
            prev = str[i];
            res += prev;
        } else 
            ++count;
    }
    if (count != 1)
        res += count;
    return res;
}
