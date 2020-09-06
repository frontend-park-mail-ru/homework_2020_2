'use strict';

function minmax(numberString) {
    if (!numberString) {
        return [undefined, undefined];
    }

    const numbers = numberString.split(' ').filter((number) => !isNaN(number))

    if (numbers.length === 0) {
        return [undefined, undefined]
    }

    let minmaxArray = new Array(2);
    minmaxArray[0] = Math.min(...numbers)
    minmaxArray[1] = Math.max(...numbers)
    return minmaxArray
}