'use strict';

const minmax = (stringOfNumbers) => {
    if (stringOfNumbers === "")
        return [undefined, undefined];
    const arrayOfWords = stringOfNumbers.split(" ");
    const arrayOfNumberWords = arrayOfWords.filter(function (number) {
        return !isNaN(number);
    });
    if (arrayOfNumberWords.length === 0)
        return [undefined, undefined];
    const arrayOfNumbers = arrayOfNumberWords.map(function (number) {
        return Number(number);
    });
    const min = Math.min(...arrayOfNumbers);
    const max = Math.max(...arrayOfNumbers);
    return [min, max];
}