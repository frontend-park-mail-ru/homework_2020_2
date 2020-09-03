'use strict';

const minmax = (stringOfNumbers) => {
    if (stringOfNumbers === '') {
        return [undefined, undefined];
    }
    const arrayOfNumberWords = stringOfNumbers.split(' ').filter((number) => (!isNaN(number)));
    if (arrayOfNumberWords.length === 0) {
        return [undefined, undefined];
    }
    const arrayOfNumbers = arrayOfNumberWords.map((number) => (Number(number)));
    const min = Math.min(...arrayOfNumbers);
    const max = Math.max(...arrayOfNumbers);
    return [min, max];
}