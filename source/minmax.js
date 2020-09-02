'use strict';

function minmax(stringOfNumbers) {
    if (stringOfNumbers === "")
        return [undefined, undefined];
    let arrayOfNumbers = stringOfNumbers.split(" ");
    for (let i = 0; i < arrayOfNumbers.length; i++)
        if (isNaN(arrayOfNumbers[i])) {
            arrayOfNumbers.splice(i, 1);
            i--;
        } else
            arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
    arrayOfNumbers.sort(function (a, b) { return a - b });
    return [arrayOfNumbers[0], arrayOfNumbers[arrayOfNumbers.length - 1]];
}