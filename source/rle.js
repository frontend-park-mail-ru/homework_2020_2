'use strict';

const rle = string => {
    if (!string) { //undefined, null или empty
        return string;
    }
    let result = "";
    let startIndex = 0;
    for (let currentIndex = 1; currentIndex < string.length; currentIndex++) {
        if (string[currentIndex] !== string[startIndex]) {
            result += string[startIndex];
            if (currentIndex - startIndex > 1) {
                result += currentIndex - startIndex;
            }
            startIndex = currentIndex;
        }
    }
    result += string[startIndex];
    if (string.length - startIndex > 1) {
        result += string.length - startIndex;
    }
    return result;
};