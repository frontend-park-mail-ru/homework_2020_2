'use strict'

const minmax = (string) => {
    const massive = string.toString().split(/ |, /).filter((item) => !isNaN(parseFloat(item)));
    const Min = Math.min(...massive);
    const Max = Math.max(...massive);
    const result = massive.filter((item) =>
        item == Max || item == Min
    ).length === 0 ? [undefined, undefined] : [Min, Max];
    return result;
}