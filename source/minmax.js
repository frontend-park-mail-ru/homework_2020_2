'use strict'

const minmax = string => {
    let massive = string.split(/\ |, /).filter(item => !isNaN(parseFloat(item)));
    let result = massive.filter(item =>
        item == Math.max(...massive) || item == Math.min(...massive)
    ).length == 0 ? [undefined, undefined] : [Math.min(...massive), Math.max(...massive)];
    return result;
}