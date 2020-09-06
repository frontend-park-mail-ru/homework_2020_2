'use strict';

const anagram = function (words) {
    var mapByCharList = new Map();
    words.forEach(word => {
        var charList = word.split("").sort().join();
        if (mapByCharList.has(charList)) {
            mapByCharList.get(charList).push(word);
        } else {
            var b = new Array();
            b.push(word);
            mapByCharList.set(charList, b);
        }
    });
    var output = new Array();
    mapByCharList.forEach(element => {
        if (element.length > 1)
            output.push(element.sort());
    });
    return output.sort();
}